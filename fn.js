// function hello() {
//     console.log('hello');
// }
// hello();

// var hello2 = function() {
//     console.log('hello2');
// }
// hello2();

// var hello = () => {
//     console.log('hello');
// }


// function testHello(myfn){
//     myfn();
// }

// testHello(hello);


// function add1(a, b) {
//     console.log(`${a+b}`);
// }
// add1(1,2);

// const add2 = function() {
//     console.log(`add2 결과: ${a+b}`);
// }
// add2(1,2);

// const add3 = (a,b) => {
//     console.log(`add3 결과: ${a+b}`);
// }

const fs = require('fs');
fs.readFile('c:/Temp/read.txt','utf-8',(err,data)=>{
    if (err) return console.log(err);


    console.log(data);
})
console.log('Done');

