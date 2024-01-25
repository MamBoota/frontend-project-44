#!/usr/bin/env node

import getReadLineSyncName from '../src/cli.js';
import getReadLineSyncQuestion from '../bin/brain-even.js';

const greeting = 'Welcome to the Brain Games!\nMay I have your name?';
console.log(greeting);
const nameUser = getReadLineSyncName();
console.log(`Hello, ${nameUser}!`);

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
console.log(condition);
console.log(`${getReadLineSyncQuestion()} ${nameUser}!`);
