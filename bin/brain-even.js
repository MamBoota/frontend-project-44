import readLineSync from 'readline-sync';

const getReadLineSyncQuestion = () => {
  const quantity = 3;
  let result = '';
  const answer1 = 'yes';
  const answer2 = 'no';
  const answerOk = 'Correct!';
  const answerFailed = 'Let\'s try again,';
  const text = 'is wrong answer ;(. Correct answer was';
  const finish = 'Congratulations,';

  for (let i = 0; i < quantity; i += 1) {
    const randomNumber = Number(Math.floor(Math.random() * 100));
    console.log(`Question: ${randomNumber}`);
    const answerUser = readLineSync.question('Your answer: ');
    result = answerUser;
    if (result === answer1 || result === answer2) {
      if (result === answer1) {
        if (randomNumber % 2 === 0) {
          console.log(`${answerOk}`);
        } else if (randomNumber % 2 !== 0) {
          console.log(`'${result}' ${text} ${answer2}`);
          return answerFailed;
        }
      } else if (result === answer2) {
        if (randomNumber % 2 !== 0) {
          console.log(`${answerOk}`);
        } else if (randomNumber % 2 === 0) {
          console.log(`'${result}' ${text} ${answer1}`);
          return answerFailed;
        }
      }
    } else return answerFailed;
  }

  return finish;
};

export default getReadLineSyncQuestion;
