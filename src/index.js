import { nameUser } from '../bin/brain-games.js'

export const getDescription = (str) => {
  const description = str
  return description
}

export const quantityGames = 3
export const answerOk = 'Correct!'
export const answerFailed = `Let's try again, ${nameUser}!`
export const text = 'is wrong answer ;(. Correct answer was'
export const finish = `Congratulations, ${nameUser}!`

export const getRandomInt = () => {
  const randomNumber = Number(Math.floor(Math.random() * 100))
  return randomNumber
}

export const getDivider = (number) => {
  const result = [1, number]

  for (let i = 2; i < Math.pow(number, 0.5); i += 1) {
    if (number % i === 0) {
      result.push(i)
      result.push(number / i)
    }
  }
  return result.sort((a, b) => a - b)
}

export const arrayDivider = getDivider(getRandomInt())

export const getMaxDivider = (array1, array2) => {
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
