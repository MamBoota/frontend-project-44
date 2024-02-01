#!/usr/bin/env node

import getReadLineSyncName from '../src/cli.js';
import getReadLineSyncSelectedGame from '../src/index.js';

const greeting = 'Welcome to the Brain Games!\nMay I have your name?';
console.log(greeting);

const nameUser = getReadLineSyncName();
console.log(`Hello, ${nameUser}!`);
console.log(`${getReadLineSyncSelectedGame()} ${nameUser}!`);
