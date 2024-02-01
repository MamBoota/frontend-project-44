import readLineSync from 'readline-sync'
import getReadLineSyncGameEven from '../bin/brain-even.js'

const getReadLineSyncSelectedGame = () => {
  const game1 = '1. The game: "Parity Check"'
  const game2 = '2. The game: "Parity Check"'
  const game3 = '3. The game: "Parity Check"'
  const game4 = '4. The game: "Parity Check"'
  const game5 = '5. The game: "Parity Check"'
  const select = readLineSync.question(`Select and enter the game number:\n${game1}\n${game2}\n${game3}\n${game4}\n${game5}\n`)

  switch (select) {
    case '1':
      return getReadLineSyncGameEven()
    case '2':
      return console.log('Тут будет игра № 2')
    case '3':
      return console.log('Тут будет игра № 3')
    case '4':
      return console.log('Тут будет игра № 4')
    case '5':
      return console.log('Тут будет игра № 5')
    default:
      return 'Incorrect input'
  }
}

export default getReadLineSyncSelectedGame
