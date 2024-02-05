import { answerFailed, answerOk, finish, getRandomInt, getDescription, quantityGames, text } from '../../src/index.js';
import getReadLineSyncQuestion from '../../src/cli.js';

const getReadLineSyncGameEven = () => {
  console.log(getDescription('Answer "yes" if the number is even, otherwise answer "no".'));

  for (let i = 0; i < quantityGames; i += 1) {
    const randomNumber = getRandomInt();
    console.log(`Question: ${randomNumber}`);
    const answerUser = getReadLineSyncQuestion();
    if (answerUser === 'yes' || answerUser === 'no') {
      if (answerUser === 'yes') {
        if (randomNumber % 2 === 0) {
          console.log(`${answerOk}`);
        } else if (randomNumber % 2 !== 0) {
          console.log(`'${answerUser}' ${text} 'no'`);
          return answerFailed;
        }
      } else if (answerUser === 'no') {
        if (randomNumber % 2 !== 0) {
          console.log(`${answerOk}`);
        } else if (randomNumber % 2 === 0) {
          console.log(`'${answerUser}' ${text} 'yes'`);
          return answerFailed;
        }
      }
    } else return answerFailed;
  }

  return finish;
};

console.log(getReadLineSyncGameEven());
export default getReadLineSyncGameEven;
