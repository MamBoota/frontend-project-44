import { getRandomInt } from '../games/game-tools/tools.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const getReadLineSyncGamePrime = () => {
  const randomNumber = getRandomInt(2, 120)
  const gameQuestion = `Question: ${randomNumber}`
  const answerCorrect = checkingForPrimeNumber(randomNumber) ? 'yes' : 'no'

  return [gameQuestion, answerCorrect]
}

const checkingForPrimeNumber = (int) => {
  for (let i = 2; i < int / 2; i += 1) {
    if (int % i === 0) return false
  }

  return int !== 1
}

export { description, getReadLineSyncGamePrime }
