import { useState } from 'react';
import Board from './Board';

const isWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const Game = () => {
  const initialBoard = Array(9).fill(null);

  const [isXNext, setIsXNext] = useState(true);
  const [movesHistory, setHistory] = useState([initialBoard]);

  const currentMove = movesHistory[movesHistory.length - 1];

  const winner = isWinner(currentMove);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (isXNext ? 'X' : 'O');
  }

  const handleClick = (squareIndex) => {
    const currentSquare = [...currentMove];

    if (isWinner(currentSquare) || currentSquare[squareIndex]) {
      return;
    }
    currentSquare[squareIndex] = isXNext ? 'X' : 'O';

    setHistory([...movesHistory, currentSquare]);
    setIsXNext(!isXNext);
  };

  return (
    <div className='game'>
      <div>
        <Board boardState={currentMove} onClick={handleClick} />
      </div>
      <div className='game-info'>
        <div>{status}</div>
        {/* <ol>{moves}</ol> */}
      </div>
    </div>
  );
};

export default Game;
