function logoutUser() {
  let sessionId = sessionStorage.getItem("id");
  let sessionToken = sessionStorage.getItem("token");
  if (sessionId || sessionToken) {
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("token");
    alert("Logout efetuado com sucesso.");

    // Necessário criar outro index.html
    window.location.href = "paginaprincipal.html";

    // Excluir os valores do section storage
  } else {
    alert("Usuário não está logado.");
  }
}

document.querySelector("#btn-logout").addEventListener("click", logoutUser);
