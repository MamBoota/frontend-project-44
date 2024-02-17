#!/usr/bin/env node

import runGameLogic from '../src/index.js'
import { getReadLineSyncGameCalc, description } from '../src/games/game-calc.js'

runGameLogic(getReadLineSyncGameCalc, description)
