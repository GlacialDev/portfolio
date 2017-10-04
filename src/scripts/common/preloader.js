'use strict';

function preloader() {
  const _window = window,
        _document = document,
        body = _document.body;
  let num = 0;

  // отключаем скролл пока не загрузится страница
  body.classList.toggle('overflow');

  // медленно считаем проценты, пока виндоу не загрузилось
  const preCounting = setInterval(function() {
    let counter = _document.querySelector('.preloader__percent');
    if (num < 95) { 
      num++;
      if (counter) counter.innerHTML = num;
    }
  }, 300);
    
  // когда контент загружается, убираем прелоадер и разрешаем скролл
  _window.onload = function() {
    //останавливаем прекаунтер
    clearInterval(preCounting);
    const preloader = _document.querySelector('.preloader');
    
    function removePreloader() {
      preloader.style.display="none";
      body.classList.toggle('overflow');
    };

    // врубаем быстрый счетчик
    (() => {
      let counter = _document.querySelector('.preloader__percent');
      counter.innerHTML = num;

      const counting = setInterval(function() {
        if ( num < 100 ) { 
          num++;
          counter.innerHTML = num;
        } else {
          clearInterval(counting);
          preloader.classList.add('contentLoaded');
          setTimeout(removePreloader, 800);
        }
      }, 20);
    })();
  };
}

export default preloader;