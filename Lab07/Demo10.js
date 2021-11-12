/**
 * * Promise
*/

'use strict'

console.clear()

const return_money = () => {
    console.log("return money")
    return new Promise((resolve, reject) => {
        let isHappy = Math.random() >= 0.5
        setTimeout(() => {
            if (isHappy)
                return resolve(1000)
            else
                return reject("Don't happy, so don't return")
        }, 500)
    })
}

return_money()
    .then(value => {
        console.log("Money is", value)
    })
    .then(() => {
        console.log("OK")
    })
    .catch(error => {
        console.error(error)
    })
    .finally(() => {
        console.log("DONE")
    })

