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

export const getRandomInt = (number) => {
  const randomNumber = Number(Math.floor(Math.random() * number))
  return randomNumber
}
