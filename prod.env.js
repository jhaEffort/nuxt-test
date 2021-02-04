'use strict'
const childProcess = require('child_process')
const branch = childProcess.execSync('git rev-parse --abbrev-ref HEAD').toString().replace(/\s+/, '')
console.log('输出的branch', branch)
module.exports = {
  NODE_ENV: '"production"',
  NODE_BRANCH: `"${branch}"`
}

