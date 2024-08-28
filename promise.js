console.log("Inciio de pago")

const newPromise  =  new Promise(function(resolve, reject){

    console.log("Pagando......")

    setTimeout(function(){

        resolve('Pago exitoso ')
    
    }, 5000); 
    

});

console.log(newPromise)

newPromise.then(function(response){

    console.log(response)

}).catch(function(response){

    console.log(response)
    
})

console.log(newPromise)


