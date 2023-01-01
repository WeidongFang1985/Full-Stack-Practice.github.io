// 1. arrow function
// 将以下代码转换成箭头函数
// function getProfile(name, age, title) {
//     const profile = {
//         name: name,
//         age: age,
//         title: title
//     }
//     return profile;
// }
// =======================================>
const getProfile = (name, age, title) => ({name, age, title})
// 为了让计算机解读{}为对象而不是代码块，要在{}外面包个()
console.log(getProfile('fang', 37, 'Eng'));

// 2. Object Destructuring 对象解构
const person = {firstname: 'John', lastname: 'Doe'};
const {firstname: fname, lastname: lname} = person; // You can rename the property name like this
console.log(fname, lname);

// 3. Destructuring a null object
function getPerson() {
    return null
}

// const {firstname, lastname} = getPerson()
// console.log(firstname, lastname)
// because the object is null, it will return error
// we should add || {} after the code

const {firstname, lastname} = getPerson() || {};
console.log(firstname, lastname)

// 4. Nest Object Destructuring
const employee = {
    id: 1001,
    name: {
        firstname1: 'John',
        lastname1: 'Doe',
        middle: {
            middleName: 'JJ'
        }
    }
}

// 解构的时候，原本什么样子，就给他什么样子
const {id, name: {firstname1, lastname1, middle: {middleName}}} = employee;
console.log(id, firstname1, middleName, lastname1);
console.log("--------------------------------------")

// 5. Destructuring function arguments
// function display(person) {
//     console.log(person.firstname + " " + person.lastname)
// }
// 用arrow function + destructuring
const display = ({firstname, lastname}) => console.log(`${firstname} ${lastname}`);
display(person);

// function addAgeAttributeToPerson(age, person) {
//     return {
//         firstname: person.firstname,
//         lastname: person.lastname,
//         age: age
//     }
// }
// 用arrow function + destructuring
// const addAgeAttributeToPerson = (age, {firstname, lastname}) => ({firstname, lastname, age});
// 还可以再简化
const addAgeAttributeToPerson = (age, person) => ({...person, age})
console.log(addAgeAttributeToPerson(15, person))

// *6. && 和 ?.的应用
// return array && array.length  === return array?.length
