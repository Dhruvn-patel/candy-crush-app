export const isCheckColumnFour = (boardSize: number) => {
  /* 
    64 -24=40  (0-40) changes
    It's possible to combination of column till 5 col (0-32)

    */
  return boardSize * boardSize - (boardSize + boardSize + boardSize) - 1;
};

export const isCheckColumnThree = (boardSize: number) => {
  /* 
    64 -16=47  (0-47) changes
    It's possible till 6 column only (0-40)
    */
  return boardSize * boardSize - (boardSize + boardSize) - 1;
};

export const generateValidMove = (
  boardSize: number,
  isValid: boolean = false
) => {

  /* 
    check not to match last two row candy and (next 2 candy) match (it's invalid)
      same as three (1 match in first row and (nextrow 2 candy) or (2 match in first row and (nextrow 1 match)))

  
  */
  const invalidMoves:Array<Number>= [];

  /* start from 
    i=8
    e.g size=8  ===> 64
      [6,7,8] invalid
      []
    i=16
    [14,15,16]  invalid
    i=32,...

  */
  for (let i: number = boardSize; i <= boardSize * boardSize; i += boardSize) {
    if (isValid) invalidMoves.push(i - 3);
    invalidMoves.push(i - 2);
    invalidMoves.push(i - 1);
  }

  /* return invalidIndex of array */
  return invalidMoves;
};
