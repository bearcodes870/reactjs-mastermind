// When using JSX, React must be in scope
import React from 'react';
import GuessRow from '../GuessRow/GuessRow';

const GameBoard = (props) => (
  <div className='component'>
    GameBoard
    <GuessRow />
    <GuessRow />
  </div>
);

export default GameBoard;