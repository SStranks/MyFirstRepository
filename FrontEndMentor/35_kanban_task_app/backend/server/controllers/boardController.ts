import Board from '#Models/boardModel';
import catchAsync from '#Utils/catchAsync';

const getAllBoards = catchAsync(async (req, res, next) => {
  const boards = await Board.find({});
  res.json(boards);
});

export { getAllBoards };
