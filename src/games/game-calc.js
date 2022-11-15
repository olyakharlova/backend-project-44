import getRandomNumber from '../getRandomNumber.js';
import playGame from '../index.js';

const rule = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const getCorrectAnswer = (x, y, operation) => {
  let answer;
  switch (operation) {
    case '+': answer = x + y;
      break;
    case '-': answer = x - y;
      break;
    case '*': answer = x * y;
      break;
  }
  return answer;
};

const getQuestionAndAnswer = () => {
  const x = getRandomNumber();
  const y = getRandomNumber();
  const operation = operations[getRandomNumber(0, operations.length)];
  const question = `${x} ${operation} ${y}`;
  const answer = getCorrectAnswer(x, y, operation);
  return [question, String(answer)];
};

const startGameCalc = () => {
  playGame(rule, getQuestionAndAnswer);
};

export default startGameCalc;
