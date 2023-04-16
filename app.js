let center = [59.11871153365891,37.9255474936798];  //координаты точки на карте

function init(){
    let map = new ymaps.Map('map', {
        center: center,
        zoom: 16,
    });

    let placemark = new ymaps.Placemark(center,{},{ //метка
        iconLayout: 'default#image',
        iconImageHref: '/location.png',
        iconImageSize: [40,40],
        iconImageOffset: [-20,]
    });

    map.controls.remove('trafficControl'); //удаляем контроль трафика
    map.controls.remove('rulerControl');   //удаляем линейку

    map.geoObjects.add(placemark);  //добавляем метку на карте
}

ymaps.ready(init);