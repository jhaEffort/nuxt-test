const { command } = require('./a.js')
const childProcess = require('child_process')
const branch = childProcess.execSync('git rev-parse --abbrev-ref HEAD').toString().replace(/\s+/, '')
async function init() {
  try {
    await command('git add .');
    await command(`git commit -m ${process.argv.splice(2)}`);
    await command(`git fetch origin ${branch}`);
    const res =  await command(`git pull origin ${branch}`);
    console.log('输出的res', res)
    await command(`git push origin ${branch}`);
  } catch (e) {
    console.log('输出的错误', e);
  }
}

init();
