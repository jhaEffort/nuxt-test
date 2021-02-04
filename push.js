
/*
<<<<<<< HEAD
*argv: ['node地址', '执行文件', '命令行参数']erererererere
=======
*argv: ['node地址', '执行文件', '命令行参数']11fsdfsdfd43543fsdfdsfdsfdsfds5345431
*99999999999988888
>>>>>>> 1b3256db78471cdfa3c1b274dedd9277a3dfa059
*argv: ['node地址', '执行文件', '命令行参数']222
*/
// console.log(process.argv.splice(2))
const childProcess = require('child_process')
const branch = childProcess.execSync('git rev-parse --abbrev-ref HEAD').toString().replace(/\s+/, '')
const { spawn, exec, execFile } = require('child_process');

let syncFile = spawn('sh', ['./test.sh', process.argv.splice(2), branch]);
syncFile.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

syncFile.on('close', (code) => {
  console.log('close', code)
})
syncFile.stderr.on('data', (data) => {
  console.log(`stderr:${data}`)
})
