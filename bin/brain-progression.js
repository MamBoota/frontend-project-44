#!/usr/bin/env node

import runGameLogic from '../src/index.js'
import { description, getReadLineSyncGameProgression } from '../src/games/game-progression.js'

runGameLogic(description, getReadLineSyncGameProgression)
