import command from './command';

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
