import readLineSync from 'readline-sync';

const getNamedGreeting = () => {
  const nameUser = readLineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${nameUser}!`);
};

export default getNamedGreeting;
