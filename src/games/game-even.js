import { answerFailed, answerOk, finish, getRandomInt, getDescription, quantityGames, text } from '../index.js'
import getReadLineSyncQuestion from '../cli.js'

const getReadLineSyncGameEven = () => {
  console.log(getDescription('Answer "yes" if the number is even, otherwise answer "no".'))

  for (let i = 0; i < quantityGames; i += 1) {
    const randomNumber = getRandomInt(100)
    console.log(`Question: ${randomNumber}`)
    const answerUser = getReadLineSyncQuestion()
    if (answerUser === 'yes' || answerUser === 'no') {
      if (answerUser === 'yes') {
        if (randomNumber % 2 === 0) {
          console.log(`${answerOk}`)
        } else if (randomNumber % 2 !== 0) {
          console.log(`'${answerUser}' ${text} 'no'`)
          return console.log(answerFailed)
        }
      } else if (answerUser === 'no') {
        if (randomNumber % 2 !== 0) {
          console.log(`${answerOk}`)
        } else if (randomNumber % 2 === 0) {
          console.log(`'${answerUser}' ${text} 'yes'`)
          return console.log(answerFailed)
        }
      }
    } else return console.log(answerFailed)
  }

  return console.log(finish)
}

export default getReadLineSyncGameEven
