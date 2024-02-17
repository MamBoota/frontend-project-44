import { getRandomInt } from '../games/game-tools/tools.js'

const description = 'What is the result of the expression?'

export const checkAnswer = (leftNumber, operator, rightNumber) => {
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

const getReadLineSyncGameCalc = () => {
  const leftNumber = getRandomInt(100)
  const rightNumber = getRandomInt(100)
  const meaning = ['+', '-', '*']
  const operator = meaning[getRandomInt(meaning.length)]
  const gameQuestion = `Question: ${leftNumber} ${operator} ${rightNumber}`
  const answerCorrect = checkAnswer(leftNumber, operator, rightNumber)

  if (answerCorrect === checkAnswer(answerCorrect)) {
    return [gameQuestion, answerCorrect]
  }
}

export { description, getReadLineSyncGameCalc }
