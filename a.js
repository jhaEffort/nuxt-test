import * as util from 'util';

const exec = util.promisify(require('child_process').exec);

export default function command(command) {
  return exec(command, {cwd: process.cwd()}).then((resp) => {
    const data = resp.stdout.toString().replace(/[\n\r]/g, '');
    return Promise.resolve(data);
  });
}
