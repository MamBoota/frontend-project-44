import { getRandomInt } from '../game-tools/tools.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkingForPrimeNumber = (number) => {
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) return false;
  }

  return number !== 1;
};

const getReadLineSyncGamePrime = () => {
  const randomNumber = getRandomInt(2, 160);
  const gameQuestion = `Question: ${randomNumber}`;
  const answerCorrect = checkingForPrimeNumber(randomNumber) ? 'yes' : 'no';

  return [gameQuestion, answerCorrect];
};

export { description, getReadLineSyncGamePrime };
