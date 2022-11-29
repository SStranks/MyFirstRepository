import { createOne, deleteOne, getAll } from '#Config/dbHandlers';
import { Column } from '#Models/columnModel';
import catchAsync from '#Utils/catchAsync';

const getAllColumns = getAll(Column);

const createColumn = createOne(Column);

const updateColumn = catchAsync(async (req, res, next) => {});

const getColumn = catchAsync(async (req, res, next) => {});

const deleteColumn = deleteOne(Column);

export { getAllColumns, createColumn, updateColumn, getColumn, deleteColumn };
