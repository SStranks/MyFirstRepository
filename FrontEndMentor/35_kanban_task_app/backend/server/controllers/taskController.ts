import { createOne, deleteOne, getAll } from '#Config/dbHandlers';
import { Task } from '#Models/taskModel';
import catchAsync from '#Utils/catchAsync';

const getAllTasks = getAll(Task);

const createTask = createOne(Task);

const updateTask = catchAsync(async (req, res, next) => {});

const getTask = catchAsync(async (req, res, next) => {});

const deleteTask = deleteOne(Task);

export { getAllTasks, createTask, updateTask, getTask, deleteTask };
