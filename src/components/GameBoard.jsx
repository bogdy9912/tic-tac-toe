import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({onSelectSquared, turns}) => {
  let gameBoard = initialGameBoard;

  for (const turn of turns){
    const {square, player} = turn;
    gameBoard[square.row][square.col] = player;
  }


    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquared(rowIndex, colIndex) {
    //     setGameBoard((prevGameBoard) => {
    //       const updatedBoard = [...prevGameBoard.map((innerArray) => [...innerArray])];
    //       updatedBoard[rowIndex][colIndex] = activePlayer;
    //       return updatedBoard;
    //     });

    //     onSelectSquared();
    // }


  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, playerSymbolIndex) => (
              <li key={playerSymbolIndex}>
                <button onClick={() => onSelectSquared(rowIndex, playerSymbolIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};


export default GameBoard;