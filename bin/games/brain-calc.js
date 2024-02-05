import { answerFailed, answerOk, finish, getRandomInt, quantityGames, text } from '../../src/index.js';
import getReadLineSyncQuestion from '../../src/cli.js';

const getReadLineSyncGameCalc = () => {
  const description = 'What is the result of the expression?';
  console.log(description);

  const meaning = ['+', '-', '*'];

  for (let i = 0; i < quantityGames; i += 1) {
    const randomNumber1 = getRandomInt();
    const randomNumber2 = getRandomInt();
    const operator = meaning[Number(Math.floor(Math.random() * meaning.length))];
    console.log(`Question: ${randomNumber1} ${operator} ${randomNumber2}`);
    const answerUser = Number(getReadLineSyncQuestion());

    if (answerUser !== answerUser.toString) {
      if (operator === '+') {
        const result1 = randomNumber1 + randomNumber2;
        if (answerUser === result1) {
          console.log(`${answerOk}`);
        } else if (answerUser !== result1) {
          console.log(`'${answerUser}' ${text} '${result1}'`);
          return answerFailed;
        }
      } if (operator === '-') {
        const result2 = randomNumber1 - randomNumber2;
        if (answerUser === result2) {
          console.log(`${answerOk}`);
        } else if (answerUser !== result2) {
          console.log(`'${answerUser}' ${text} '${result2}'`);
          return answerFailed;
        }
      } else if (operator === '*') {
        const result3 = randomNumber1 * randomNumber2;
        if (answerUser === result3) {
          console.log(`${answerOk}`);
        } else if (answerUser !== result3) {
          console.log(`'${answerUser}' ${text} '${result3}'`);
          return answerFailed;
        }
      }
    } else return answerFailed;
  }

  return finish;
};

console.log(getReadLineSyncGameCalc());
export default getReadLineSyncGameCalc;
