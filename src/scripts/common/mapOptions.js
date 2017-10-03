// Координаты центра на карте. Широта: 59.941827, Долгота: 30.215237
var centerLatLng = new google.maps.LatLng(59.941827, 30.215237);
// Обязательные опции с которыми будет проинициализированна карта
// Здесь же - стилизация
export var myMapOptions = {
  center: centerLatLng, // Координаты центра мы берем из переменной centerLatLng
  zoom: 16,              // Зум по умолчанию. Возможные значения от 0 до 21
  styles: 
  [
      {
          "featureType": "administrative",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "color": "#444444"
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [
              {
                  "color": "#f2f2f2"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "all",
          "stylers": [
              {
                  "saturation": -100
              },
              {
                  "lightness": 45
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "all",
          "stylers": [
              {
                  "color": "#86a77a"
              },
              {
                  "visibility": "on"
              }
          ]
      }
  ]
}

export default myMapOptions;