import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import mongoose from 'mongoose';

import * as usersController from './controllers/users';
import authMiddleware from './middlewares/auth'

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/users', usersController.register);
app.post('/api/users/login', usersController.login);
app.get('/api/user', authMiddleware, usersController.currentUser)

io.on('connection', () => {
  console.log('connect socket.io');
});

mongoose.connect('mongodb://localhost:27017/eltrello').then(() => {
  console.log('connected to mongodb');
  httpServer.listen(4001);
});
