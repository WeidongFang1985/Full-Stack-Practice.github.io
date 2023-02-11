const data1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data1 = 'first verify'
            resolve(data1)
        }, 700)
    })
}

const data2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data2 = 'second verify'
            reject('second failed')
        }, 800)
    })
}

const handleBtnClick = () => {
    Promise.all([data1(), data2()])
        .then((res) => {
            console.log('res', res)
        })
        .catch((err) => {
            console.log('err', err)
        })
}

handleBtnClick();