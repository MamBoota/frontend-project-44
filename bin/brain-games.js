#!/usr/bin/env node
import getReadLineSync from "../src/cli.js";

const greeting = 'Welcome to the Brain Games!\nMay I have your name?';
console.log(greeting);
console.log(`Hello, ${getReadLineSync()}!`);
