import { Board } from '#Models/boardModel';
import AppError from '#Utils/appError';
import catchAsync from '#Utils/catchAsync';
import { NextFunction, Request, Response } from 'express';

// NOTE:  Currently not being utilized - 'new column' uses the 'board edit' modal.
const createColumn = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { boardId } = req.params;

    let board = await Board.findById(boardId);
    if (!board) return next(new AppError('No document found in DB!', 404));

    try {
      board.columns.push(req.body);
      board = await board.save();
    } catch (error) {
      return next(new AppError('Unable to commit document', 404));
    }

    res.status(201).json({
      status: 'success',
      results: 1,
      data: { board },
    });
  }
);

// For moving a task from one column to another.
const updateColumn = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    // NOTE:  In FE API call: req.body; the task, and column to move to.
    const { boardId, columnId } = req.params;
    const { newColumnId, taskId, newTask } = req.body;

    let board = await Board.findById(boardId);
    if (!board) return next(new AppError('No document found in DB!', 404));

    try {
      const task = board.columns.id(columnId)?.tasks.id(taskId);
      if (!task) throw new Error();

      board.columns.id(columnId)?.tasks.pull(task);
      board.columns.id(newColumnId)?.tasks.push(newTask);
      await board.save();
    } catch {
      return next(new AppError('Unable to commit document', 404));
    }

    res.status(201).json({
      status: 'success',
      results: 1,
      data: { data: board },
    });
  }
);

const deleteColumn = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { boardId, columnId } = req.params;

    const board = await Board.findById(boardId);
    if (!board) return next(new AppError('No document found in DB!', 404));

    try {
      board.columns.id(columnId)?.remove();
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

export { createColumn, deleteColumn, updateColumn };
