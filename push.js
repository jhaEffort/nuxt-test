
/*
*argv: ['node地址', '执行文件', '命令行参数']
*/
// console.log(process.argv.splice(2))
const { spawn, exec, execFile } = require('child_process');

let syncFile = spawn('sh', ['./test.sh']);
syncFile.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

syncFile.on('close', (code) => {
  console.log(`子进程退出码：${code}`)
})
syncFile.stderr.on('data', (data) => {
  console.log(`stderr:${data}`)
})
