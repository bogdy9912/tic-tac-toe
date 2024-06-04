import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({onSelectSquared, activePlayer}) => {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectSquared(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
          const updatedBoard = [...prevGameBoard.map((innerArray) => [...innerArray])];
          updatedBoard[rowIndex][colIndex] = activePlayer;
          return updatedBoard;
        });

        onSelectSquared();
    }


  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, playerSymbolIndex) => (
              <li key={playerSymbolIndex}>
                <button onClick={() => handleSelectSquared(rowIndex, playerSymbolIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};


export default GameBoard;