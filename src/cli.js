import readLineSync from 'readline-sync'

const getReadLineSync = () => {
  const question = readLineSync.question('Your answer: ')
  return question
}

export default getReadLineSync
