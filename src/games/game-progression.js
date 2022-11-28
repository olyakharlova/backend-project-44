import getRandomNumber from '../getRandomNumber.js';
import playGame from '../index.js';

const rule = 'What number is missing in the progression?';
const progressionLength = 10;
const maxStep = 10;

const getQuestionAndAnswer = () => {
  const progression = [];
  const firstNum = getRandomNumber();
  const progressionStep = getRandomNumber(1, maxStep);
  const skip = getRandomNumber(0, progressionLength);

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstNum + progressionStep * i);
  }

  const answer = progression[skip];
  progression[skip] = '..';
  const question = progression.join(' ');
  return [question, String(answer)];
};

const startGameProgression = () => {
  playGame(rule, getQuestionAndAnswer);
};

export default startGameProgression;
