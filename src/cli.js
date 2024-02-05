import readLineSync from 'readline-sync'

const getReadLineSyncQuestion = () => {
  const question = readLineSync.question('Your answer: ')
  return question
}

export default getReadLineSyncQuestion
