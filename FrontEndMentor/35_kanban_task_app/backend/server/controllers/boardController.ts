import { getAll } from '#Config/dbHandlers';
import { Board } from '#Models/boardModel';
import catchAsync from '#Utils/catchAsync';

const getAllBoards = getAll(Board);

const createBoard = catchAsync(async (req, res, next) => {});

const updateBoard = catchAsync(async (req, res, next) => {});

const getBoard = catchAsync(async (req, res, next) => {});

const deleteBoard = catchAsync(async (req, res, next) => {});

export { getAllBoards, createBoard, updateBoard, getBoard, deleteBoard };
