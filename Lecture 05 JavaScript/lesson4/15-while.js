// 1. 打印人的一生，从1岁到100岁
let age = 1;
while (age <= 100) {
    if (age !== 1) {
        console.log(`I am ${age} years old`);
    } else {
        console.log(`I am ${age} year old`);
    }
    age++;
}
console.log('-----------------------');

// 2. 计算 1 ~ 100 之间所有整数的和
let num = 1;
let sum = 0;
while (num <= 100) {
    sum += num;
    num++
}
console.log(sum);