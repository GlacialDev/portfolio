function map() {
// initMap() - функция инициализации карты
  function initMap() {
    // Координаты центра на карте. Широта: 59.941827, Долгота: 30.215237
    var centerLatLng = new google.maps.LatLng(59.941827, 30.215237);
    // Обязательные опции с которыми будет проинициализированна карта
    // Здесь же - стилизация
    var mapOptions = {
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
    };
    // Вкладываем в переменную ид контейнера для карты
    var container = document.getElementById("map");
    // Создаем карту внутри элемента #map, если контейнер есть на этой странице
    if(container) {
        var map = new google.maps.Map(container, mapOptions);
    }

    var marker = new google.maps.Marker({
            // Определяем позицию маркера
            position: {lat: 59.941671, lng: 30.209733},
            // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
            map: map,
            // Пишем название маркера - появится если навести на него курсор и немного подождать
            title: 'Наш маркер: Большой театр',
            // Стилизация маркера (задаем ему свг-иконку)
            icon: {
                url: '../images/svg/map_marker.svg',
            }
        });
        // При клике переходим в новом окне на карту
        marker.addListener('click', function() {
            window.open("https://www.google.com/maps/place/59%C2%B056'30.1%22N+30%C2%B012'35.0%22E/@59.941685,30.2075293,17z/data=!3m1!4b1!4m6!3m5!1s0x0:0x0!7e2!8m2!3d59.9416853!4d30.2097182?hl=ru-RU")
        });
  }
  // Ждем полной загрузки страницы, после этого запускаем initMap()
  google.maps.event.addDomListener(window, "load", initMap);
}

export default map;