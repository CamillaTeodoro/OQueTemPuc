console.log(sessionStorage.getItem('token'))
if(sessionStorage.getItem('token') == null){
    alert('É necessário logar');
    window.location.href = 'login.html';
}