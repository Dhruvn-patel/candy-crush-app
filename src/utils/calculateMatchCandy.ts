export const isMatchColumnFour = (
  newBoard: String[],
  boardSize: number,
  isCheckColumnFour: number
) => {
  for (let i = 0; i <= isCheckColumnFour; i++) {
    const columnOfFour = [
      i,
      i + boardSize,
      i + boardSize * 2,
      i + boardSize * 3,
    ];
    /*to check for selcetedcolor of first like 0 and check in every 8,16,32  if same make it empty */
    const selcetedColor = newBoard[i];

    const isBlank = "";
    /* also check already blank or not */

    if (
      columnOfFour.every(
        (squre) => newBoard[squre] === selcetedColor && !isBlank
      )
    ) {
      /* match to mark empty to  */
      columnOfFour.forEach((squre) => (newBoard[squre] = ""));
      console.log("match column of four", newBoard);

      return true;
    }
  }
};

export const isMatchColumnThree = (
  newBoard: String[],
  boardSize: number,
  isCheckColumnThree: number
) => {
  for (let i = 0; i <= isCheckColumnThree; i++) {
    const columnOfThree = [i, i + boardSize, i + boardSize * 2];
    /*to check for selcetedcolor of first like 0 and check in every 8,16,32  if same make it empty */
    const selcetedColor = newBoard[i];

    const isBlank = "";
    /* also check already blank or not */

    if (
      columnOfThree.every(
        (squre) => newBoard[squre] === selcetedColor && !isBlank
      )
    ) {
      /* match to mark empty to  */

      columnOfThree.forEach((squre) => (newBoard[squre] = ""));
      console.log("---->Three", newBoard);
      return true;
    }
  }
};
export const isMatchRowFour = (newBoard: String[], boardSize: number,
  invalidMovesForColumnOfFour:number[]
  ) => {
  for (let i = 0; i < boardSize * boardSize; i++) {
    const rowOfFour = [i, i + 1, i + 2, i + 3];
    const decidedColor = newBoard[i];
    const isBlank = newBoard[i] === "";
    if (invalidMovesForColumnOfFour.includes(i)) continue;
    if (
      rowOfFour.every((square) => newBoard[square] === decidedColor && !isBlank)
    ) {
      rowOfFour.forEach((square) => (newBoard[square] = ""));
      return true;
    }
  }
};
export const isMatchRowThree = (newBoard: String[], boardSize: number,
  invalidMovesForColumnOfThree:number[]) => {
  for (let i = 0; i < boardSize * boardSize; i++) {
    const rowOfFour = [i, i + 1, i + 2, i + 3];
    const decidedColor = newBoard[i];
    const isBlank = newBoard[i] === "";
    if (invalidMovesForColumnOfThree.includes(i)) continue;
    if (
      rowOfFour.every((square) => newBoard[square] === decidedColor && !isBlank)
    ) {
      rowOfFour.forEach((square) => (newBoard[square] = ""));
      return true;
    }
  }
};
