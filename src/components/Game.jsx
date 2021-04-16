import React, { useState } from 'react';

const calculateWinner = (squares) => {
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

const Square = ({ value, onClick }) => (
  <button className='square' onClick={onClick}>
    {value}
  </button>
);

const Board = () => {
  const [value, setValue] = useState(Array(9).fill(null));
  const [xIsNext, setNext] = useState(true);

  const handleClick = (i) => {
    const values = value.slice();

    if (calculateWinner(values) || values[i]) {
      return;
    }
    values[i] = xIsNext ? 'X' : 'O';

    setValue(values);
    setNext(!xIsNext);
  };

  const renderSquare = (i) => {
    return <Square value={value[i]} onClick={() => handleClick(i)} />;
  };

  const winner = calculateWinner(value);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <div>
      <div className='status'>{status}</div>
      <div className='board-row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='board-row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className='board-row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

const Game = ({ status, moves }) => {
  return (
    <div className='game'>
      <div className='game-board'>
        <Board />
      </div>
      <div className='game-info'>
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

export default Game;
