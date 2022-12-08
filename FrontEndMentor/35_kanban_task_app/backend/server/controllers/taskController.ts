import { createOne, deleteOne, getAll } from '#Config/dbHandlers';
import { Board } from '#Models/boardModel';
import AppError from '#Utils/appError';
// import { Task } from '#Models/taskModel';
import catchAsync from '#Utils/catchAsync';
import { NextFunction, Request, Response } from 'express';

// NOTE:  Can we delete this? To get all columns you can just query for a board and access the columns directly on the result.
const getAllTasks = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const board = await Board.findById(req.params.boardId);

    if (!board) return next(new AppError('No document found in DB!', 404));

    const column = board.columns.findIndex(
      (c) => c._id.toString() === req.params.columnId
    );

    if (column === -1)
      return next(new AppError('No document found in DB!', 404));

    const tasks = board.columns[column].tasks;

    res.status(200).json({
      status: 'success',
      results: tasks.length,
      data: { tasks },
    });
  }
);

const createTask = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    let board = await Board.findById(req.params.boardId);

    if (!board) return next(new AppError('No document found in DB!', 404));

    const column = board.columns.findIndex(
      (c) => c._id.toString() === req.params.columnId
    );

    if (column === -1)
      return next(new AppError('No document found in DB!', 404));

    try {
      board.columns[column].tasks.push(req.body);
      board = await board.save();
    } catch (error) {
      return next(new AppError('Unable to commit document', 404));
    }

    res.status(201).json({
      status: 'success',
      results: 1,
      data: {
        data: board,
      },
    });
  }
);

const updateTask = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    // NOTE:  This works.
    // const board = await Board.findOneAndUpdate(
    //   {
    //     _id: req.params.boardId,
    //   },
    //   {
    //     $set: {
    //       'columns.$[r].tasks.$[t].title': req.body.title,
    //       'columns.$[r].tasks.$[t].status': req.body.status,
    //       'columns.$[r].tasks.$[t].description': req.body.description,
    //     },
    //   },
    //   {
    //     new: true,
    //     runValidators: true,
    //     arrayFilters: [
    //       { 'r._id': req.params.columnId },
    //       { 't._id': req.params.taskId },
    //     ],
    //   }
    // );

    // NOTE:  .set() is currently not performing validation.
    const board = await Board.findById(req.params.boardId);

    if (!board) return next(new AppError('No document found in DB!', 404));

    try {
      const task = board.columns
        .id(req.params.columnId)
        ?.tasks.id(req.params.taskId);
      if (task === null || task === undefined) throw new Error();
      task.set(req.body);
      await board.save();
    } catch (error) {
      return next(new AppError('Unable to commit document!', 404));
    }

    console.log('BOARD', board);

    res.status(200).json({
      status: 'success',
      results: 1,
      data: { board },
    });
  }
);

const getTask = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const board = await Board.findById(req.params.boardId);

    if (!board) return next(new AppError('No document found in DB!', 404));

    const column = board.columns.findIndex(
      (c) => c._id.toString() === req.params.columnId
    );

    if (column === -1)
      return next(new AppError('No document found in DB!', 404));

    const task = board.columns[column].tasks.find(
      (t) => t._id.toString() === req.params.taskId
    );

    if (!task) return next(new AppError('No document found in DB!', 404));

    res.status(200).json({
      status: 'success',
      results: 1,
      data: { task },
    });
  }
);

const deleteTask = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const board = await Board.findById(req.params.boardId);

    if (!board) return next(new AppError('No document found in DB!', 404));

    const column = board.columns.findIndex(
      (c) => c._id.toString() === req.params.columnId
    );

    if (column === -1)
      return next(new AppError('No document found in DB!', 404));

    try {
      board.columns[column].tasks.id(req.params.taskId)?.remove();
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

export { getAllTasks, createTask, updateTask, getTask, deleteTask };
