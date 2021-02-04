const exec = require('child_process').exec;

module.exports = {
  command: function(command) {
    return exec(command)
  }
}
