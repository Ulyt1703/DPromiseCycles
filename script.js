/* let auto = new Promise((resolve, reject) => {
    resolve("Ми це очікували!")
})
.then(value => console.log(value))
.catch(error => console.error(error))


let myFriend = new Promise((resolve, reject) => {
    if(false){
        resolve("Мій друг - Настя")
    }
    else{
        reject("Ми це не очікували!")
    }
})
.then(value => console.log(value))
.catch(error => console.error(error)) */



/* function findNumbers(array){
    let find = new Promise((resolve, reject) => {
        let newArray = array.every(eachElement => eachElement % 2 === 0)
        if(newArray){
            resolve(array)
        }
        else{
            reject("Є непарні числа")
        }
    })
    return find
}
findNumbers([20, 34, 10, 26, 11])
.then(value => console.log(value))
.catch(error => console.error(error)) */



let delay = ms => {
    let sendMessage = new Promise((resolve, reject) => {
        setTimeout(() => resolve(ms), ms)
    })
    return sendMessage
}

let newTime = time => console.log(`Resolved after ${time}ms`);

delay(2000).then(newTime)
delay(1000).then(newTime)
delay(1500).then(newTime)


/* ---------------------------------------- */


let users = [
        { name: 'Mango', active: true },
        { name: 'Poly', active: false },
        { name: 'Ajax', active: true },
        { name: 'Lux', active: false },
]

function toggleUserState(allUsers, userName){
    let updatedUsers = new Promise((resolve, reject) => {
        allUsers.map(user =>
            user.name === userName ? { ...user, active: !user.active } : user
        )
        if(allUsers){
            resolve(users)
        }
        else{
            reject("Щось пішло не так!")
        }
    })

    return updatedUsers
}

toggleUserState(users, 'Mango')
toggleUserState(users, 'Lux')
.then(correct => console.table(correct))
.catch(incorrect => console.error(incorrect))


/* ---------------------------------------- */



let randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function makeTransaction(transaction){
    let newTransaction = new Promise((resolve, reject) => {
        let delay = randomIntegerFromInterval(200, 500)

        setTimeout(() => {
            let canProcess = Math.random() > 0.3
    
        if(canProcess){
            resolve(transaction.id, delay)
        } 
        else {
            reject(transaction.id)
        }
        }, delay)
    })
    return newTransaction
}

function logSuccess(id, time){
    console.log(`Transaction ${id} processed in ${time}ms`)
}

function logError(id){
    console.warn(`Error processing transaction ${id}. Please try again later.`)
}

makeTransaction({ id: 70, amount: 150 })
    .then(logSuccess)
    .catch(logError)

makeTransaction({ id: 71, amount: 230 })
    .then(logSuccess)
    .catch(logError)

makeTransaction({ id: 72, amount: 75 })
    .then(logSuccess)
    .catch(logError)

makeTransaction({ id: 73, amount: 100 })
    .then(logSuccess)
    .catch(logError)