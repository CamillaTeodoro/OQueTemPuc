function register() {
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  let password2 = document.querySelector("#password2").value;

  if (password2 == password) {
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("password", password);
  } else {
    alert("Senhas digitadas são diferentes.");
  }
}

document.querySelector("#button").addEventListener("click", register);
