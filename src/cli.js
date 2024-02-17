import readLineSync from 'readline-sync';

const getNamedGreeting = () => {
  const nameUser = readLineSync.question('May I have your name? ');
  return `Hello, ${nameUser}!`;
};

export default getNamedGreeting;
