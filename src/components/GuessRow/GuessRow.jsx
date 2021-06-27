// When using JSX, React must be in scope
import React from 'react';
import GuessPegs from '../GuessPegs/GuessPegs';
import GuessScore from '../GuessScore/GuessScore';

const GuessRow = (props) => (
  <div className='component'>
    Guess Row #
    <GuessPegs />
    <GuessScore />
  </div>
);

export default GuessRow;