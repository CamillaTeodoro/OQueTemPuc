function register(){
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('password', password);
}

document.querySelector("#button").addEventListener('click', register);