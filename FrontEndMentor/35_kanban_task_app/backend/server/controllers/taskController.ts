import { Board } from '#Models/boardModel';
import AppError from '#Utils/appError';
import catchAsync from '#Utils/catchAsync';
import { NextFunction, Request, Response } from 'express';
import { Types } from 'mongoose';

const createTask = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { boardId, columnId } = req.params;
    const { title, description, status, subtasks } = req.body;

    let board = await Board.findById(boardId);
    if (!board) return next(new AppError('No document found in DB!', 404));

    const columnIndex = board.columns.findIndex(
      (c) => c._id.toString() === columnId
    );

    if (columnIndex === -1)
      return next(new AppError('No document found in DB!', 404));

    try {
      const newTask = { title, description, status, subtasks };
      board.columns[columnIndex].tasks.push(newTask);
      await board.save();
    } catch (error) {
      return next(new AppError('Unable to commit document', 404));
    }

    res.status(201).json({
      status: 'success',
      results: 1,
      data: { data: board },
    });
  }
);

const updateTask = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { boardId, columnId, taskId } = req.params;
    const { title, description, status, subtasks } = req.body;

    const board = await Board.findById(boardId);
    if (!board) return next(new AppError('No document found in DB!', 404));

    try {
      const task = board.columns.id(columnId)?.tasks?.id(taskId);

      if (task === null || task === undefined) throw new Error();
      task.set({ title, description, status, subtasks });
      await board.save();
    } catch (error) {
      return next(new AppError('Unable to commit document!', 404));
    }

    res.status(200).json({
      status: 'success',
      results: 1,
      data: { data: board },
    });
  }
);

const deleteTask = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { boardId, columnId, taskId } = req.params;

    const board = await Board.findById(boardId);
    if (!board) return next(new AppError('No document found in DB!', 404));

    const column = board.columns.findIndex(
      (c) => c._id.toString() === columnId
    );

    if (column === -1)
      return next(new AppError('No document found in DB!', 404));

    try {
      board.columns[column].tasks.id(taskId)?.remove();
      await board.save();
    } catch (error) {
      return next(new AppError('No document found in DB!', 404));
    }

    res.status(204).json({
      status: 'success',
      data: null,
    });
  }
);

export { createTask, deleteTask, updateTask };
