import { getRandomInt } from '../games/game-tools/tools.js'

const description = 'Find the greatest common divisor of given numbers.'

const getReadLineSyncGameGCD = () => {
  const randomNumber1 = getRandomInt(1, 100)
  const randomNumber2 = getRandomInt(1, 100)
  const gameQuestion = `Question: ${randomNumber1} ${randomNumber2}`
  const answerCorrect = `${getMaxDivider(getDivider(randomNumber1), getDivider(randomNumber2))}`

  return [gameQuestion, answerCorrect]
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

  return result.slice(-1)
}

export { description, getReadLineSyncGameGCD }
