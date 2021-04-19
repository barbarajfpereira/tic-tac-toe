import Square from './Square';

const Board = ({ boardState, onClick }) => {
  const squares = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className='board'>
      {squares.map((index) => (
        <Square
          key={index}
          boardState={boardState[index]}
          onClick={() => onClick(index)}
        />
      ))}
    </div>
  );
};

export default Board;
