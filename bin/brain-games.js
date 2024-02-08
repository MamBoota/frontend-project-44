#!/usr/bin/env node

import getReadLineSyncQuestion from '../src/cli.js'

export const greeting = 'Welcome to the Brain Games!\nMay I have your name?'
console.log(greeting)

export const nameUser = getReadLineSyncQuestion()
console.log(`Hello, ${nameUser}!`)
