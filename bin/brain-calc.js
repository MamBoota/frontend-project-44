#!/usr/bin/env node

import runGameLogic from '../src/index.js';
import { description, getReadLineSyncGameCalc } from '../src/games/game-calc.js';

runGameLogic(description, getReadLineSyncGameCalc);
