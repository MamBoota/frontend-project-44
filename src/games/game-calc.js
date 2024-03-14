import getRandomInt from './../tools.js';

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

const getOperator = () => {
  const meaning = ['+', '-', '*'];
  const operator = meaning[Math.floor(Math.random() * meaning.length)];

  return operator;
};

const getReadLineSyncGameCalc = () => {
  const leftNumber = getRandomInt();
  const rightNumber = getRandomInt();
  const gameQuestion = `Question: ${leftNumber} ${getOperator()} ${rightNumber}`;
  const answerCorrect = `${isAnswer(leftNumber, getOperator(), rightNumber)}`;

  return [gameQuestion, answerCorrect];
};

export { description, getReadLineSyncGameCalc };
