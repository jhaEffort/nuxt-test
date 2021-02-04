
/*
*argv: ['node地址', '执行文件', '命令行参数']
*测试数据66668888888811111111
*试数据66668888888811111111
*/
// console.log(process.argv.splice(2))
6
const childProcess = require('child_process')
const branch = childProcess.execSync('git rev-parse --abbrev-ref HEAD').toString().replace(/\s+/, '')
const { spawn, exec, execFile } = require('child_process');

let syncFile = spawn('sh', ['./test.sh', process.argv.splice(2), branch]);
syncFile.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

syncFile.on('close', (code) => {
  console.log(`子进程退出码：${code}`)
})
syncFile.stderr.on('data', (data) => {
  console.log(`stderr:${data}`)
})
