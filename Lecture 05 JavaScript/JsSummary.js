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
console.log('------------------------------------');
console.log(Boolean('123'));  //true
console.log(Boolean('hello'));  //true
console.log('------------------------------------');

// 4. operator
let num1 = 0.1 + 0.2;
console.log(num1);
console.log(num1 === 0.3);
//用.toFixed(), toPrecision()解决该问题
console.log(num1.toFixed(2));
console.log(num1.toPrecision(2));
console.log('------------------------------------');

// *5 spread operator 展开运算符
// 5-1 Copying an array
let fruits = ['Apple', 'Orange', 'Banana']
let newFruits = [...fruits];
console.log(newFruits);
// 5-2 Concatenating arrays
let arr1 = ['A', 'B', 'C'];
let arr2 = ['X', 'Y', 'Z'];
let newArr = [...arr1, ...arr2];
console.log(newArr);
console.log('------------------------------------');

// *6 解构赋值
// 基础类型解构
let [a, b, c] = [1, 2, 3];
console.log(a, b, c);
//对象数组结构
let [a2, b2, c2] = [{name: '1'}, {name: '2'}, {name: '3'}];
console.log(a2, b2, c2);
//...解构
let [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first);
console.log(rest);
//嵌套解构
let [a3, [b3], c3] = [1, [2, 3], 4];
console.log(a3, b3, c3);
//对象属性解构
let {name, age} = {name: 'Bob', age: 30};
console.log(name, age);
console.log('------------------------------------');

// 7. 剩余参数
const fn = (...args) => console.log(args);
fn(15, 23, 33);

// *8. function declaration vs function expression
// function declaration:
// function fn() {};
// 可以称之为命名函数，调用代码可以在声明前，也可以在声明后

// function expression:
// const fn = () = {};
// 叫作匿名函数，调用只能在函数体后使用