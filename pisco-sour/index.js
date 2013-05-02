/*
 *
 * Copyright (c) 2013 Maximiliano Fierro
 * Licensed under the MIT license.
 */
'use strict';

var Pisco = require('./lib/Pisco'),
    Logger = require('./sample/Logger'),
    piscoCfg = require('./pisco-config'),
    logger;

Pisco.resolve(piscoCfg, process.cwd());

logger = new Logger();


logger.info('Put info somewhere');

logger.debug('This goes in debug');

