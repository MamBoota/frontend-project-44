#!/usr/bin/env node

import runGameLogic from '../src/index.js'
import { description, getReadLineSyncGameGCD } from '../src/games/game-gcd.js'

runGameLogic(description, getReadLineSyncGameGCD)
