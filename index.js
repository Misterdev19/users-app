const URL_RQUEST  = "https://jsonplaceholder.typicode.com/users";

fetch(URL_RQUEST).then(function(response){
      if(response.status == 404 ){
          return new Error("No existe el recurso");
      }
       
      return response.json();
    
}).then(function(data){
        console.log(data)
        
}).catch(function(response){
    console.log(response)
});