/* NodeJs Architecture */

const os = require('os');
const fs = require('fs');

console.log(os.cpus().length)
// fs.appendFileSync('./test.txt', `hey there\nthis is node js`)
fs.readFile('./test.txt','utf-8', (err, result) => {
    console.log(result)
});
console.log(os.cpus().length)
