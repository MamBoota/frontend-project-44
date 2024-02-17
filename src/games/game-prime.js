import { getRandomInt } from '../games/game-tools/tools.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const getReadLineSyncGamePrime = () => {
  const randomNumber = getRandomInt(2, 160)
  const gameQuestion = `Question: ${randomNumber}`
  const answerCorrect = checkingForPrimeNumber(randomNumber) ? 'yes' : 'no'

  return [gameQuestion, answerCorrect]
}

const checkingForPrimeNumber = (number) => {
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) return false
  }

  return number !== 1
}

export { description, getReadLineSyncGamePrime }
