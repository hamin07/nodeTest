// 랜덤한 숫자를 저장할 배열 만들기
let numbers = []; //let, var, const


// 1부터 100까지의 랜덤한 숫자 10개 만들기
for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    numbers.push(randomNumber);
}


// 만들어진 숫자들 출력하기
console.log("랜덤한 숫자 10개:", numbers);


// 1) 숫자들의 합 구하기
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
}
console.log("숫자들의 합:", sum);


// 2) 숫자들을 오름차순으로 정렬하기
for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] > numbers[j]) {
            // 두 숫자의 위치 바꾸기
            let temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;
        }
    }
}
console.log("정렬된 숫자들:", numbers);