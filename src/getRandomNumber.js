const maxNumRand = 100;
const minNumRand = 0;

const getRandomNumber = (minNum = minNumRand, maxNum = maxNumRand) => Math.round(Math.random() * maxNum) + minNum;

export default getRandomNumber;
