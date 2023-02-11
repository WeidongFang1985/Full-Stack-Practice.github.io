// when user click the btn
// - if res time less than 3s, return data
// - if res time more than 3s, return time out
const data = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = 'data one'
            resolve(data)
        }, 2000)
    })
}

const timeOut = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const timeOut = 'time out'
            resolve(timeOut)
        }, 3000)
    })
}


const handleBtnClick = () => {
    Promise.race([data(), timeOut()])
        .then((res) => {
            console.log(res)
        })
}
handleBtnClick()