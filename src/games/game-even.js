import { getRandomInt } from '../game-tools/tools.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getReadLineSyncGameEven = () => {
  const randomNumber = getRandomInt();
  const gameQuestion = `Question: ${randomNumber}`;
  const checkRandomNumber = randomNumber % 2 === 0;
  const answerCorrect = checkRandomNumber ? 'yes' : 'no';

  return [gameQuestion, answerCorrect];
};

export { description, getReadLineSyncGameEven };
