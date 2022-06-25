// localStorage.setItem(
//   "endereco",
//   "Av. Trinta e Um de Março, 955 - Dom Cabral, Belo Horizonte - MG"
// );

// function geocode(location) {
//   return fetch(
//     "https://maps.googleapis.com/maps/api/geocode/json?" +
//       new URLSearchParams({
//         address: location,
//         key: "AIzaSyBoli9EYB_otB6WgX8AOp4WNmva5CNPocA",
//       })
//   )
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (response) {
//       return response;
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
// }

// function initMap() {
//   const location = localStorage.getItem("endereco");
//   const enderecoElement = document.getElementById("endereco");
//   if (enderecoElement != null && location != null) {
//     enderecoElement.innerText = location;
//   }
//   geocode(location).then(function (response) {
//     // Localização do restaurante
//     console.log(response);
//     const restaurante = response.results[0].geometry.location;
//     // The map, centered at restaurante
//     const map = new google.maps.Map(document.getElementById("map"), {
//       zoom: 15,
//       center: restaurante,
//     });
//     // Marca a localização do restaurante
//     const marker = new google.maps.Marker({
//       position: restaurante,
//       map: map,
//     });
//   });
// }

// window.initMap = initMap;
