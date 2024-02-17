#!/usr/bin/env node

import runGameLogic from '../src/index.js'
import { getReadLineSyncGameEven, description } from '../src/games/game-even.js'

runGameLogic(getReadLineSyncGameEven, description)
