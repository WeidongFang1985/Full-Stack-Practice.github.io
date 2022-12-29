// 1. 求1-100之间所有数的平均值   需要一个 sum 和的变量 还需要一个平均值 average 变量
const fn1 = (num) => {
    let sum = 0;
    let count = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
        count++;
    }
    return sum / count;
}
console.log(fn1(100));

// 3. 求1-100之间所有能被3整除的数字的和
const fn3 = () => {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(fn3());