
/*
*argv: ['node地址', '执行文件', '命令行参数']11fsdfsdfd43543fsdfdsfdsfdsfds5345431
*99999999999988888
*argv: ['node地址', '执行文件', '命令行参数']222
*/
// console.log(process.argv.splice(2))
// const childProcess = require('child_process')
// const branch = childProcess.execSync('git rev-parse --abbrev-ref HEAD').toString().replace(/\s+/, '')
// const { spawn, exec, execFile } = require('child_process');

// let syncFile = spawn('sh', ['./test.sh', process.argv.splice(2), branch]);
// syncFile.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });

// syncFile.on('close', (code) => {
//   console.log('close', code)
// })
// syncFile.stderr.on('data', (data) => {
//   console.log(`stderr:${data}`)
// })
const { spawn, exec, execFile } = require('child_process');
exec('git add .').then((res,rej) =>{
  console.log('11')
}).catch((e)=>{
  console.log(e)
})
