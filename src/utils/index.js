export const STATUS = {
    transactionStatus: true
}
export const constructMessage = (logLevel, message) => {
    return {
        data: {
            logLevel,
            message
        }
    }
}

export const fetchMethod = (url) => fetch(url).then(res => {
    return new Promise((resolve, reject) => {
        if (res.status === 200 && res.ok) {
            resolve(res.json())
        }
        else reject('Api failure')
    })
})