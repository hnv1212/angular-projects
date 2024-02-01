import { NextFunction, Request, Response } from 'express';
import BoardModel from '../models/board';
import { ExpressRequestInterface } from '../types/expressRequest.interface';
import { Server } from 'socket.io';
import { SocketEventsEnum } from '../types/socketEvents.enum';
import { getErrorMessage } from '../helpers';
import { Socket } from '../types/socket.interface';

export const getBoards = async (
  req: ExpressRequestInterface,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.user) {
      return res.sendStatus(401);
    }
    const boards = await BoardModel.find({ userId: req.user.id });
    res.send(boards);
  } catch (err) {
    next(err);
  }
};

export const getBoard = async (
  req: ExpressRequestInterface,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.user) {
      return res.sendStatus(401);
    }
    const board = await BoardModel.findById(req.params.boardId);
    res.send(board);
  } catch (err) {
    next(err);
  }
};

export const createBoards = async (
  req: ExpressRequestInterface,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.user) {
      return res.sendStatus(401);
    }
    const newBoard = new BoardModel({
      title: req.body.title,
      userId: req.user._id,
    });
    const savedBoard = await newBoard.save();
    res.send(savedBoard);
  } catch (err) {
    next(err);
  }
};

export const joinBoard = (
  io: Server,
  socket: Socket,
  data: { boardId: string }
) => {
  console.log('🚀 ~ boardId:', data.boardId);
  socket.join(data.boardId);
};

export const leaveBoard = (
  io: Server,
  socket: Socket,
  data: { boardId: string }
) => {
  console.log('🚀 ~ boardId:', data.boardId);
  socket.leave(data.boardId);
};

export const updateBoard = async (
  io: Server,
  socket: Socket,
  data: { boardId: string; fields: { title: string } }
) => {
  try {
    if (!socket.user) {
      socket.emit(
        SocketEventsEnum.boardsUpdateFailure,
        'User is not authorized!'
      );
      return;
    }
    const updatedBoard = await BoardModel.findByIdAndUpdate(
      data.boardId,
      data.fields,
      { new: true }
    );
    io.to(data.boardId).emit(
      SocketEventsEnum.boardsUpdateSuccess,
      updatedBoard
    );
  } catch (err) {
    socket.emit(SocketEventsEnum.boardsUpdateFailure, getErrorMessage(err));
  }
};

export const deleteBoard = async (
  io: Server,
  socket: Socket,
  data: { boardId: string }
) => {
  try {
    if (!socket.user) {
      socket.emit(
        SocketEventsEnum.boardsDeleteFailure,
        'User is not authorized!'
      );
      return;
    }

    await BoardModel.deleteOne({
      _id: data.boardId,
    });
    io.to(data.boardId).emit(SocketEventsEnum.boardsDeleteSuccess);
  } catch (err) {
    socket.emit(SocketEventsEnum.boardsDeleteFailure, getErrorMessage(err));
  }
};
