import getRandomInt from './../tools.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getReadLineSyncGameEven = () => {
  const randomNumber = getRandomInt();
  const gameQuestion = `Question: ${randomNumber}`;
  const answerCorrect = isEven(randomNumber) ? 'yes' : 'no';

  return [gameQuestion, answerCorrect];
};

export { description, getReadLineSyncGameEven };
