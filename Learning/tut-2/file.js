
/* 

> sync vs async:
    > sync blocks the code, return some value.
    > async dont block it, expects a callback in parameter. 
*/
const fs = require('fs');

fs.appendFileSync('test.txt', `Hey there\n`)
fs.copyFileSync('test.txt', 'copy.txt')
console.log(fs.statSync('test.txt'))
console.log(fs.readFileSync('./test.txt','utf-8'))


// async one
fs.readFile('./test.txt','utf-8',(err, result) => {
    if(err) {
        console.log(err)
    }
    else{
        console.log(result)
    }
}) 


fs.writeFile('./test.txt', 'Again written something\n', undefined, (err) => {})

// to delete

fs.unlinkSync('./copy.txt')
fs.mkdirSync('./book/index/page', {recursive: true})
fs.rmdirSync('./book', {recursive:true, force: true}) 


