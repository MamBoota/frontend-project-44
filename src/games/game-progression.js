import { getRandomInt } from '../games/game-tools/tools.js'

const description = 'What number is missing in the progression?'

const getReadLineSyncGameProgression = () => {
  const arithmeticProgression = getArithmeticProgression()
  const index = getRandomInt(arithmeticProgression.length)
  const answerCorrect = `${arithmeticProgression[index]}`

  arithmeticProgression[index] = '..'

  const gameQuestion = `Question: ${arithmeticProgression.join(' ')}`

  return [gameQuestion, answerCorrect]
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

export { description, getReadLineSyncGameProgression }
