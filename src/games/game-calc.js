import { getRandomInt } from '../games/game-tools/tools.js'

const description = 'What is the result of the expression?'

const getReadLineSyncGameCalc = () => {
  const leftNumber = getRandomInt()
  const rightNumber = getRandomInt()
  const meaning = ['+', '-', '*']
  const operator = meaning[Math.floor(Math.random() * meaning.length)]
  const gameQuestion = `Question: ${leftNumber} ${operator} ${rightNumber}`
  const answerCorrect = `${checkAnswer(leftNumber, operator, rightNumber)}`

  return [gameQuestion, answerCorrect]
}

const checkAnswer = (leftNumber, operator, rightNumber) => {
  switch (operator) {
    case '+':
      return leftNumber + rightNumber
    case '-':
      return leftNumber - rightNumber
    case '*':
      return leftNumber * rightNumber
    default:
      return null
  }
}

export { description, getReadLineSyncGameCalc }
