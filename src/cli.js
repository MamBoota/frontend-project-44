import readLineSync from 'readline-sync'

const getReadLineSyncName = () => {
  const question = readLineSync.question('Your answer: ')
  return question
}

export default getReadLineSyncName
