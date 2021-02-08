
/*
*argv: ['node地址', '执行文件', '命令行参数']645654654654654
*法第范德发生的发的所发生的发的附属萨范德萨范德萨三方士大夫地方第三方的发生的发达省份的
*/
// console.log(process.argv.splice(2))
const childProcess = require('child_process')
const branch = childProcess.execSync('git rev-parse --abbrev-ref HEAD').toString().replace(/\s+/, '')
const { spawn, exec, execFile } = require('child_process');

let syncFile = spawn('sh', ['./start-sh.sh', process.argv.splice(2), branch]);
syncFile.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

syncFile.on('close', (code) => {
  console.log('close', code)
})
syncFile.stderr.on('data', (data) => {
  console.log(`stderr:${data}`)
})
