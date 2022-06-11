function initMap() {
  // Localização do restaurante
  const restaurante = { lat: -25.344, lng: 131.031 };
  // The map, centered at restaurante
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: restaurante,
  });
  // Marca a localização do restaurante
  const marker = new google.maps.Marker({
    position: restaurante,
    map: map,
  });
}

window.initMap = initMap;
