import getRandomNumber from '../getRandomNumber.js';
import playGame from '../index.js';

const rule = 'What is the result of the expression?';
const operatorsAndExpressions = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
};

const operators = Object.keys(operatorsAndExpressions);

const getQuestionAndAnswer = () => {
  const x = getRandomNumber();
  const y = getRandomNumber();
  const indexOfOperator = getRandomNumber(0, operators.length - 1);
  const operator = operators[indexOfOperator];
  const question = `${x} ${operator} ${y}`;
  const answer = operatorsAndExpressions[operator](x, y);
  return [question, String(answer)];
};

const startGameCalc = () => {
  playGame(rule, getQuestionAndAnswer);
};

export default startGameCalc;
