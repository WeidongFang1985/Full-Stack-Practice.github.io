// 1. 把数字型转换为字符串型
// toString()
let num = 10;
console.log(num.toString(), typeof num.toString()); //常用
// String(variable)
console.log(String(num), typeof String(num));
// 拼接字符串
console.log(num + '')

// 2. 把字符串型转换为数字型
console.log(parseInt('3.14')) // 3
console.log(parseInt('120px')); // 120
console.log(parseInt('rem120px')); // NaN
console.log(parseFloat('3.14')) // 3.14
console.log(Number('3.14')) //常用
console.log(typeof ('12' - 0))

// 3. boolean
console.log(Boolean(''));  //false
console.log(Boolean(0));  //false
console.log(Boolean(NaN));  //false
console.log(Boolean(null));  //false
console.log(Boolean(undefined));  //false
console.log('-----------------');
console.log(Boolean('123'));  //true
console.log(Boolean('hello'));  //true
