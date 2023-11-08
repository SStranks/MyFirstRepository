import type { IBoard } from '#Shared/types';

export interface IAllBoardsResponseDTO {
  data: IBoard[] | [];
}

export interface IBoardResponseDTO {
  data: IBoard;
}
