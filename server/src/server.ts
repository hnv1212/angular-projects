import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import mongoose from 'mongoose';
import cors from 'cors';
import jwt from 'jsonwebtoken';

import * as usersController from './controllers/users';
import * as boardsController from './controllers/boards';
import * as columnsController from './controllers/columns';
import * as tasksController from './controllers/tasks';
import authMiddleware from './middlewares/auth';
import { SocketEventsEnum } from './types/socketEvents.enum';
import { secretOrPrivateKey } from './config';
import UserModel from './models/user';
import { Socket } from './types/socket.interface';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: '*',
  },
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.set('toJSON', {
  virtuals: true,
  transform: (_, converted) => {
    delete converted._id;
  },
});

app.post('/api/users', usersController.register);
app.post('/api/users/login', usersController.login);
app.get('/api/user', authMiddleware, usersController.currentUser);

app.get('/api/boards', authMiddleware, boardsController.getBoards);
app.post('/api/boards', authMiddleware, boardsController.createBoards);
app.get('/api/boards/:id', authMiddleware, boardsController.getBoard);
app.get(
  '/api/boards/:id/columns',
  authMiddleware,
  columnsController.getColumns
);
app.get('/api/boards/:id/tasks', authMiddleware, tasksController.getTasks);

io.use(async (socket: Socket, next) => {
  try {
    const token = (socket.handshake.auth.token as string) ?? '';
    const data = jwt.verify(token.split(' ')[1], secretOrPrivateKey) as {
      id: string;
      email: string;
    };
    const user = await UserModel.findById(data.id);
    if (!user) {
      return next(new Error('Authentication socket.io error!'));
    }
    socket.user = user;
    next();
  } catch (error) {
    next(new Error('Authentication socket.io error!'));
  }
}).on('connection', (socket) => {
  socket.on(SocketEventsEnum.boardsJoin, (data) => {
    boardsController.joinBoard(io, socket, data);
  });
  socket.on(SocketEventsEnum.boardsLeave, (data) => {
    boardsController.leaveBoard(io, socket, data);
  });
  socket.on(SocketEventsEnum.columnsCreate, (data) => {
    columnsController.createColumn(io, socket, data);
  });
  socket.on(SocketEventsEnum.tasksCreate, (data) => {
    tasksController.createTask(io, socket, data);
  });
  socket.on(SocketEventsEnum.boardsUpdate, (data) => {
    boardsController.updateBoard(io, socket, data);
  });
  socket.on(SocketEventsEnum.boardsDelete, (data) => {
    boardsController.deleteBoard(io, socket, data);
  });
  socket.on(SocketEventsEnum.columnsDelete, (data) => {
    columnsController.deleteColumn(io, socket, data);
  });
  socket.on(SocketEventsEnum.columnsUpdate, (data) => {
    columnsController.updateColumn(io, socket, data);
  });
  socket.on(SocketEventsEnum.tasksUpdate, (data) => {
    tasksController.updateTask(io, socket, data);
  });
});

mongoose.connect('mongodb://localhost:27017/eltrello').then(() => {
  console.log('connected to mongodb');
  httpServer.listen(4001);
});
