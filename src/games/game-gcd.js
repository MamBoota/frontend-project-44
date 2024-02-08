import { getDescription, quantityGames, getRandomInt, getDivider, getMaxDivider, answerOk, text, answerFailed, finish } from '../index.js'
import getReadLineSyncQuestion from '../cli.js'

const getReadLineSyncGameGCD = () => {
  console.log(getDescription('Find the greatest common divisor of given numbers.'))

  for (let i = 0; i < quantityGames; i += 1) {
    const randomNumber3 = getRandomInt()
    const randomNumber4 = getRandomInt()
    const maxDivider = getMaxDivider(getDivider(randomNumber3), getDivider(randomNumber4))
    console.log(`Question: ${randomNumber3} ${randomNumber4}`)
    const answerUser = Number(getReadLineSyncQuestion())

    if (answerUser !== answerUser.toString) {
      if (answerUser === maxDivider) {
        console.log(`${answerOk}`)
      } else if (answerUser !== maxDivider) {
        console.log(`'${answerUser}' ${text} '${maxDivider}'`)
        return console.log(answerFailed)
      }
    } else return console.log(answerFailed)
  }

  return console.log(finish)
}

export default getReadLineSyncGameGCD
