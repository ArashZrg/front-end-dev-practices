//this function simulate response from a server randomly and returns reponse time on success or failed

function request () {
    const time = Math.floor(Math.random() * 200) + 1
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if(time <= 140) {
                resolve(time)
            } else {
                reject(time)
            }
        }, time)
    })
}

module.exports = request