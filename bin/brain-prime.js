#!/usr/bin/env node

import runGameLogic from '../src/index.js'
import { description, getReadLineSyncGamePrime } from '../src/games/game-prime.js'

runGameLogic(description, getReadLineSyncGamePrime)
