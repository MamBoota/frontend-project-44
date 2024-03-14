import getRandomInt from './../tools.js';

const description = 'Find the greatest common divisor of given numbers.';

const isRightAnswer = (randomNumber1, randomNumber2) => {
  if (!randomNumber2) {
    return randomNumber1;
  }

  return isRightAnswer(randomNumber2, randomNumber1 % randomNumber2);
};

const getReadLineSyncGameGCD = () => {
  const randomNumber1 = getRandomInt(1, 100);
  const randomNumber2 = getRandomInt(1, 100);
  const gameQuestion = `Question: ${randomNumber1} ${randomNumber2}`;
  const answerCorrect = `${isRightAnswer(randomNumber1, randomNumber2)}`;

  return [gameQuestion, answerCorrect];
};

export { description, getReadLineSyncGameGCD };
