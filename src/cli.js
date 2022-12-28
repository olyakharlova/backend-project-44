import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = () => {
  const question = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${question}!`);
};

export default userName;
