

function componentRowUser(user){

    return `<tr>
            <th class="text-center" scope="row">${user.name}</th>
            <td class="text-center">${user.username}</td>
            <td class="text-center">${user.email}</td>
            <td class="text-center">${user.phone}</td>
        </tr>`;  
}


function  viewsUsersList(dataUser){

    const tableBody  = document.getElementById('dom_table_user');
    let rowUser  = "";
    dataUser.forEach( function (user){

        rowUser += componentRowUser(user);
        
    });
    
    tableBody.innerHTML = rowUser;
}
                                                  

function fetchApi(){
        const URL_RQUEST  = "https://jsonplaceholder.typicode.com/users";
        const domLoad  = document.getElementById('dom_table_user');
        domLoad.innerHTML = `<h1>Cargando</h1>`;
        fetch(URL_RQUEST).then(function(response){
            if(response.status == 404 ){
                return new Error("No existe el recurso");
            }
        
            return response.json();
            
        }).then(function(data){

            viewsUsersList(data)
                
        }).catch(function(response){
            console.log(response)
        });
}


fetchApi();