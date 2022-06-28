function loginUser(){
    let data = readPeople();
    let store = readData();
    let id = 0, meet = false;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    for(i = 0; i < data.people.length; i++){
        if ( data.people[i].email == email      && 
             password == data.people[i].password ){
            id = data.people[i].id;
            meet = true;
        }
    }

    if (! meet){
        for(i = 0; i < store.restaurant.length; i++){
            console.log(store.restaurant[i].email + " " + store.restaurant[i].password +   "\n");
            if ( store.restaurant[i].email === email   &&  store.restaurant[i].password === password)
                {
                    id = store.restaurant[i].id;
                    meet = true;
                }
        }
    }

    if(meet){
        let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)
        sessionStorage.setItem('id', id);
        sessionStorage.setItem('token', token);
        
        // Necessário criar outro index.html
        window.location.href = "paginaprincipal.html";


        // Excluir os valores do section storage
    }else{
        alert("email ou senha incorreta");
    }

}

document.querySelector("#button_open").addEventListener('click', loginUser);