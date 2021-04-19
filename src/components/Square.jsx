const Square = ({ boardState, onClick }) => (
  <button className='square' onClick={onClick}>
    {boardState}
  </button>
);

export default Square;
