// 异步的工作机制，遇到await会跳出该异步函数，去执行其他函数
// 这里，跳出async1 去执行async2 等执行完以后，会把其他同步函数执行完，再回到之前的异步函数里继续执行。
const async1 = async () => {
    console.log('async1 start')
    console.log('let me think')
    await async2()
    console.log('still thinking')
    console.log('async1 end')
}

const async2 = () => {
    console.log('async2')
}

console.log('script start')
async1();
console.log('script end')
//
// const buyFruit = (fruit) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(fruit)
//             resolve(`getting ${fruit} success`)
//         }, 1000)
//     })
// }
//
// const init = async () => {
//     const res1 = await buyFruit('apple')
//     console.log('res', res1)
//     const res2 = await buyFruit('banana')
//     console.log('res', res2)
//     const res3 = await buyFruit('orange')
//     console.log('res', res3)
// }
//
// init()

const foo = async () => {
    await Promise.resolve('mama').then((res) => {
        console.log(res)
    })
    console.log(3)
}

foo()