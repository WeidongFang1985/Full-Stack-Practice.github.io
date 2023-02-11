// line2-line17 is called callback hell
// const buyFruit = (fruit, callback) => {
//     setTimeout(() => {
//         console.log(fruit)
//         callback()
//     }, 1000)
// }
//
// buyFruit('apple', () => {
//     buyFruit('banana', () => {
//         buyFruit('orange', () => {
//             setTimeout(() => {
//                 console.log('end')
//             }, 1000)
//         })
//     })
// })

//We use promise to solve callback hell
const buyFruit = (fruit) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(fruit)
            resolve(`getting ${fruit} success`)
        }, 1000)
    })
}

buyFruit('apple')
    .then((res) => {
        console.log(res + "\n")
        return buyFruit('banana')
    })
    .then((res) => {
        console.log(res + "\n");
        return buyFruit('orange')
    })
    .then(() => {
        setTimeout(() => {
            console.log('end')
        }, 1000)
    })