const obj = {some: 'values'}
const newObj = Object.assign(obj, {some: 'v'});
console.log(newObj)

const ob1 = {a: 1, b: 2}
const ob2 = {c: 3, d: 4}
let newOb = {...ob1, ...ob2}
console.log(newOb)

let obj1 = {name: 'ben', age: 22}
Object.freeze(obj1);
obj1.name = 'Chris';
console.log(obj1);