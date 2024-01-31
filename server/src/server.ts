import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import mongoose from 'mongoose';
import cors from 'cors';

import * as usersController from './controllers/users';
import * as boardsController from './controllers/boards';
import authMiddleware from './middlewares/auth';

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

io.on('connection', () => {
  console.log('connect socket.io');
});

mongoose.connect('mongodb://localhost:27017/eltrello').then(() => {
  console.log('connected to mongodb');
  httpServer.listen(4001);
});
