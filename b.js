// import { command } from './a.js';
const { command } = require('./a.js')
async function init() {
  try {
    await command('git add .');
    await command('git commit -m "my commit" ');
    const result = await command('git push');
  } catch (e) {
    console.log(e);
  }
}

init();
