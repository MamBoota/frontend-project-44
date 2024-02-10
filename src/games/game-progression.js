import { answerFailed, answerOk, finish, getRandomInt, quantityGames, text, getDescription } from '../index.js'
import getReadLineSyncQuestion from '../cli.js'

const getReadLineSyncGameProgression = () => {
  console.log(getDescription('What number is missing in the progression?'))

  for (let i = 0; i < quantityGames; i += 1) {
    const arithmeticProgression = getArithmeticProgression()
    const index = getRandomInt(arithmeticProgression.length)
    const value = arithmeticProgression[index]

    arithmeticProgression[index] = '..'

    console.log(`Question: ${arithmeticProgression.join(' ')}`)
    const answerUser = Number(getReadLineSyncQuestion())

    if (answerUser !== answerUser.toString) {
      if (answerUser === value) {
        console.log(`${answerOk}`)
      } else if (answerUser !== value) {
        console.log(`'${answerUser}' ${text} '${value}'`)
        return console.log(answerFailed)
      }
    } else return console.log(answerFailed)
  }

  return console.log(finish)
}

const getArithmeticProgression = () => {
  const startNumber = Number(getRandomInt(100))
  const stepProgression = Number(getRandomInt(5)) + 1
  let nextNumber = startNumber + stepProgression
  const lengthProgression = Number(getRandomInt(5)) + 5

  const arrayProgression = [startNumber]

  for (let i = 0; i < lengthProgression - 1; i += 1) {
    arrayProgression.push(nextNumber)
    nextNumber += stepProgression
  }

  return arrayProgression
}

export default getReadLineSyncGameProgression
