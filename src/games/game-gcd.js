import getRandomNumber from '../getRandomNumber.js';
import playGame from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const findGcd = (x, y) => (y === 0 ? x : findGcd(y, x % y));

const getQuestionAndAnswer = () => {
  const x = getRandomNumber();
  const y = getRandomNumber();
  const question = `${x} ${y}`;
  const answer = findGcd(x, y);
  return [question, String(answer)];
};

const startGameGcd = () => {
  playGame(rule, getQuestionAndAnswer);
};

export default startGameGcd;
