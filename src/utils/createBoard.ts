import { candis } from "./candyImgData";

export const createBoard = (boardSize: number) => {
  /* create board and fill candy img  */

  return Array(boardSize * boardSize)
    .fill(null)
    .map(() => candis[Math.floor(Math.random() * candis.length)]);
};
