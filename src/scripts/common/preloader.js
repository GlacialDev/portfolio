'use strict';

function preloader() {
  const body = document.body;

  // отключаем скролл пока не загрузится страница
  body.classList.toggle('overflow');

  // когда контент загружается, убираем прелоадер и разрешаем скролл
  window.onload = function() {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('contentLoaded');
    
    function removePreloader() {
      preloader.style.display="none";
      body.classList.toggle('overflow');
    }
    setTimeout(removePreloader, 800);
  };
}

export default preloader;