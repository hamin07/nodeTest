// 문자열을 역순으로 만드는 함수
function reverseString(str) {
    // 빈 문자열 준비하기
    let reversed = "";
   
    // 문자열의 마지막 글자부터 첫 글자까지 반복
    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i];
    }
   
    // 역순으로 된 문자열 반환
    return reversed;
}


// 테스트할 문자열
let str1 = "Hello";
let str2 = "Happy";


// 첫 번째 문자열 역순으로 만들기
console.log("첫 번째 문자열:");
console.log("원래 문자열:", str1);
console.log("역순 문자열:", reverseString(str1));


// 두 번째 문자열 역순으로 만들기
console.log("\n두 번째 문자열:");
console.log("원래 문자열:", str2);
console.log("역순 문자열:", reverseString(str2));
