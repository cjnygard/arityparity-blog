'use strict';

const realFs = require('fs');

const gracefulFs = require('graceful-fs');

gracefulFs.gracefulify(realFs);

exports.createPages = require('./gatsby/create-pages');
exports.onCreateNode = require('./gatsby/on-create-node');
