'use strict';

function preloader() {
  const preloader = document.querySelector('.preloader'),
        body = document.body;

  // отключаем скролл пока не загрузится страница
  body.classList.toggle('overflow');

  // когда контент загружается, убираем прелоадер и разрешаем скролл
  window.onload = function() {
    preloader.classList.add('contentLoaded');
    preloader.style.display="none";
    body.classList.toggle('overflow');
  };

}

export default preloader;