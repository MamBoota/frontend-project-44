#!/usr/bin/env node

import runGameLogic from '../src/index.js'
import { description, getReadLineSyncGameEven } from '../src/games/game-even.js'

runGameLogic(description, getReadLineSyncGameEven)
