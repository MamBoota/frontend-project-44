import { answerFailed, answerOk, finish, getRandomInt, quantityGames, text, getDescription } from '../index.js'
import getReadLineSyncQuestion from '../cli.js'

const getReadLineSyncGameCalc = () => {
  console.log(getDescription('What is the result of the expression?'))

  const meaning = ['+', '-', '*']

  for (let i = 0; i < quantityGames; i += 1) {
    const randomNumber1 = getRandomInt(100)
    const randomNumber2 = getRandomInt(100)
    const operator = meaning[getRandomInt(meaning.length)]
    console.log(`Question: ${randomNumber1} ${operator} ${randomNumber2}`)
    const answerUser = Number(getReadLineSyncQuestion())

    if (answerUser !== answerUser.toString) {
      if (operator === '+') {
        const result1 = randomNumber1 + randomNumber2
        if (answerUser === result1) {
          console.log(`${answerOk}`)
        } else if (answerUser !== result1) {
          console.log(`'${answerUser}' ${text} '${result1}'`)
          return console.log(answerFailed)
        }
      } if (operator === '-') {
        const result2 = randomNumber1 - randomNumber2
        if (answerUser === result2) {
          console.log(`${answerOk}`)
        } else if (answerUser !== result2) {
          console.log(`'${answerUser}' ${text} '${result2}'`)
          return console.log(answerFailed)
        }
      } else if (operator === '*') {
        const result3 = randomNumber1 * randomNumber2
        if (answerUser === result3) {
          console.log(`${answerOk}`)
        } else if (answerUser !== result3) {
          console.log(`'${answerUser}' ${text} '${result3}'`)
          return console.log(answerFailed)
        }
      }
    } else return console.log(answerFailed)
  }

  return console.log(finish)
}

export default getReadLineSyncGameCalc
