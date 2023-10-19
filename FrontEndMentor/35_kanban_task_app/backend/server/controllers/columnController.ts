import { Board } from '#Models/boardModel';
import AppError from '#Utils/appError';
import catchAsync from '#Utils/catchAsync';
import { NextFunction, Request, Response } from 'express';

const createColumn = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    let board = await Board.findById(req.params.boardId);

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
    const { boardId, columnId } = req.params;

    let board = await Board.findOne({ 'columns._id': columnId });

    if (!board) return next(new AppError('No document found in DB!', 404));

    // NOTE:  In FE API call, need to pass in taskId and columnId of the column to move task to;
    // NOTE:  Obj should look: {taskId: x, newColumnId: x, newTask: { ... }}
    // NOTE:  Remove/add operations.. what if one fails and the other succeeds?
    // REFACTOR:  Need to use the 'transaction' - see FEM33
    try {
      const task = board.columns.id(columnId)?.tasks.id(req.body.taskId);
      task?.remove();
      const newColumn = board.columns
        .id(req.body.newColumnId)
        ?.tasks.push(req.body.newTask);
      await board.save();
    } catch {
      return next(new AppError('Unable to commit document', 404));
    }

    res.status(201).json({
      status: 'success',
      results: 1,
      data: { data: board },
    });

    // let board = await Board.findById(req.params.boardId);

    // if (!board) return next(new AppError('No document found in DB!', 404));

    // const column = board.columns.findIndex(
    //   (c) => c._id.toString() === req.params.columnId
    // );

    // if (column === -1)
    //   return next(new AppError('No document found in DB!', 404));

    // try {
    //   board.columns[column].name = req.body.name;
    //   board = await board.save();
    // } catch (error) {
    //   return next(new AppError('Unable to commit document', 404));
    // }

    // res.status(201).json({
    //   status: 'success',
    //   results: 1,
    //   data: { board },
    // });
  }
);

// const updateColumn = catchAsync(
//   async (req: Request, res: Response, next: NextFunction) => {
//     let board = await Board.findById(req.params.boardId);

//     if (!board) return next(new AppError('No document found in DB!', 404));

//     const column = board.columns.findIndex(
//       (c) => c._id.toString() === req.params.columnId
//     );

//     if (column === -1)
//       return next(new AppError('No document found in DB!', 404));

//     try {
//       board.columns[column].name = req.body.name;
//       board = await board.save();
//     } catch (error) {
//       return next(new AppError('Unable to commit document', 404));
//     }

//     res.status(201).json({
//       status: 'success',
//       results: 1,
//       data: { board },
//     });
//   }
// );

const deleteColumn = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const board = await Board.findById(req.params.boardId);

    if (!board) return next(new AppError('No document found in DB!', 404));

    try {
      board.columns.id(req.params.columnId)?.remove();
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
