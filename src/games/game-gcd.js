import { getDescription, quantityGames, getRandomInt, answerOk, text, answerFailed, finish } from '../index.js'
import getReadLineSyncQuestion from '../cli.js'

const getReadLineSyncGameGCD = () => {
  console.log(getDescription('Find the greatest common divisor of given numbers.'))

  for (let i = 0; i < quantityGames; i += 1) {
    const randomNumber3 = getRandomInt(100)
    const randomNumber4 = getRandomInt(100)
    const maxDivider = getMaxDivider(getDivider(randomNumber3), getDivider(randomNumber4))
    console.log(`Question: ${randomNumber3} ${randomNumber4}`)
    const answerUser = Number(getReadLineSyncQuestion())

    if (answerUser !== answerUser.toString) {
      if (answerUser === maxDivider) {
        console.log(`${answerOk}`)
      } else if (answerUser !== maxDivider) {
        console.log(`'${answerUser}' ${text} '${maxDivider}'.`)
        return console.log(answerFailed)
      }
    } else return console.log(answerFailed)
  }

  return console.log(finish)
}

const getDivider = (number) => {
  const result = [1, number]

  for (let i = 2; i < Math.pow(number, 0.5); i += 1) {
    if (number % i === 0) {
      result.push(i)
      result.push(number / i)
    }
  }
  return result.sort((a, b) => a - b)
}

const getMaxDivider = (array1, array2) => {
  const result = []

  for (const item1 of array1) {
    for (const item2 of array2) {
      if (item1 === item2) {
        result.push(item1)
      }
    }
  }

  return Number(result.slice(-1))
}

export default getReadLineSyncGameGCD
