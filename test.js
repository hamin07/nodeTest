
var sum = 0;
var num = [];

for(i=0; i<10; i++) {
    const rand = Math.random();
    console.log(rand);
    sum += rand;
    num.push(Math.random());
} 

console.log("숫자의 합:", sum);
num = num.sort();
console.log("오름차순 정렬:", num);


function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("Hello"));

function calc1(num1, num2) {
    return num1 + num2;
}
function calc2(num1, num2) {
    return num1 - num2;
}
function calc3(num1, num2) {
    return num1 * num2;
}
function calc4(num1, num2) {
    return num1 / num2;
}

console.log(calc1(5,3));
console.log(calc2(5,3));
console.log(calc3(5,3));
console.log(calc4(5,3));

function length1(word) {
    return word.length >=5;
}
function length2(word){
    return word[0] === word[word.length -1];
}
    
console.log(length1("apple"));
console.log(length2("appla"));


const fs = require('fs');
var data = fs.readFileSync('c:/Temp/read.txt','utf-8');
console.log(data);
console.log('Done');


