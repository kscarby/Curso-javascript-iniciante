
let myPromise = new Promise (function(resolve,reject) {

    let randomNumber = Math.floor(Math.random() *10)

    if (randomNumber > 3) {
        setTimeout(function(){
            resolve("Number is great then 3!");

        } ,3000)
    } else {
        setTimeout (function () {
            resolve("Number is not great then 3");
        } ,3000)
    }
})

myPromise
    .then (function(message){
        console.log(message);
})
    .catch(function(message){
        console.log(message);

    })
