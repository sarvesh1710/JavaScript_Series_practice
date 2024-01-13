// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task");
//         resolve()
//     },5000)
// }).then(function(){
//     console.log("async task resolved");
// })

// const promise2=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//     let error = false

//     if(!error){
//         resolve({name:"sarvesh",no:"292"})
//     }else{
//         reject("ERROR Spoted")
//     }

//     })
// }).then((user)=>{
//     console.log(`User Name is ${user.name} and Registration number is ${user}`)
//     return user.name
// }).then((user)=>{
//     console.log(`${user}`)
// }).catch(()=>{
//     console.log(`Error Handeled${user.name}`)
// })


// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })

//  promiseFour
//  .then((user) => {
//     console.log(user);
//     return user.username
// }).then((user) => {
//     console.log(user);
// }).catch(function(error){
//     console.log(error);
// }).finally(() => console.log("The promise is either resolved or rejected"))

// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => console.log(error))



async function getAllUsers(){
    try {
        const response = await fetch('https://api.github.com/users/hiteshchoudhary')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()