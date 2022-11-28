import { createOne, deleteOne, getAll } from '#Config/dbHandlers';
import { Board } from '#Models/boardModel';
import catchAsync from '#Utils/catchAsync';

const getAllBoards = getAll(Board);

const createBoard = createOne(Board);

const updateBoard = catchAsync(async (req, res, next) => {});

const getBoard = catchAsync(async (req, res, next) => {});

const deleteBoard = deleteOne(Board);

export { getAllBoards, createBoard, updateBoard, getBoard, deleteBoard };
