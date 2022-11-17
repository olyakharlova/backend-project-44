import getRandomNumber from '../getRandomNumber.js';
import playGame from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getFactors = (x, y) => {
  const xfactors = [];
  const yfactors = [];
  const commonFactors = [];
  let gcd;

  for (let i = 1; i <= x; i++) {
    if (x % i === 0) {
      xfactors.push(i);
    }
  }

  for (let i = 1; i <= y; i++) {
    if (y % i === 0) {
      yfactors.push(i)
    }
  }

  for (const item of xfactors) {
    if (yfactors.includes(item)) {
      commonFactors.push(item);
      gcd = commonFactors[commonFactors.length - 1];
    }
  }
  return gcd;
};

const getQuestionAndAnswer = () => {
  const x = getRandomNumber();
  const y = getRandomNumber();
  const question = `${x} ${y}`;
  const answer = getFactors(x, y);
  return [question, String(answer)];
};

const startGameGcd = () => {
  playGame(rule, getQuestionAndAnswer);
};

export default startGameGcd;
