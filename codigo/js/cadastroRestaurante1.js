function checkedPassword(){
    let password1 = document.querySelector("#password").value;
    let password2 = document.querySelector("#password2").value;
    return(password1 == password2 && password1 != "" );
}

function register(){
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    if(checkedPassword()){
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('password', password);
        window.location.href = "cadastrofornecedor2.html";
    }else{alert("Entre com as duas senhas iguais");}
}

document.querySelector("#button").addEventListener('click', register);