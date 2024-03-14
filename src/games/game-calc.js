import getRandomInt from '../tools.js';
import runGameLogic from '../index.js';

const description = 'What is the result of the expression?';

const isAnswer = (leftNumber, operator, rightNumber) => {
  switch (operator) {
    case '+':
      return leftNumber + rightNumber;
    case '-':
      return leftNumber - rightNumber;
    case '*':
      return leftNumber * rightNumber;
    default:
      return null;
  }
};

const getReadLineSyncGameCalc = () => {
  const leftNumber = getRandomInt();
  const rightNumber = getRandomInt();
  const meaning = ['+', '-', '*'];
  const operator = meaning[Math.floor(Math.random() * meaning.length)];
  const gameQuestion = `Question: ${leftNumber} ${operator} ${rightNumber}`;
  const answerCorrect = `${isAnswer(leftNumber, operator, rightNumber)}`;

  return [gameQuestion, answerCorrect];
};

export default () => runGameLogic(description, getReadLineSyncGameCalc);
