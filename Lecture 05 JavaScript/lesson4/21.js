// 利用函数求数组 [5,2,99,101,67,77] 中的最大数值。
// const findMax = (arr) => Math.max(...arr);
//
// console.log(findMax([5, 2, 99, 101, 67, 77]));

const array = [
    {
        'x': '8/11/2021',
        'y': 112
    },
    {
        'x': '18/11/2021',
        'y': 312
    }, {
        'x': '28/11/2021',
        'y': 122
    }, {
        'x': '8/12/2021',
        'y': 182
    }
]

const findMax = (arr) => Math.max(...arr.map((item) => item.y));
console.log(findMax(array));
