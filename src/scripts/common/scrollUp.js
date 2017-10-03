'use strict'

function scrollUp(value) {
  const arrow = document.querySelector('.arrow__link-b'),
        _window = window;
        // определяем расстояние скролла, значение задается при клике через обработчик
  let   scrollPath, 
        // на сколько скроллить за одну итерацию функции setInterval внизу (аналог скорости)
        // значение задается при клике через обработчик
        scrollValue = -value,
        // начальная высота откуда скроллим
        scrollFrom,
        // флаг
        needToScroll = false;

  function scrolling() {
    if(needToScroll) {
      // задаем переменной начальную высоту
      scrollFrom = scrollPath,
      // с каждой итерацией изменяем высоту до которой надо прокрутить
      scrollPath = scrollPath + scrollValue;
      _window.scroll(0, scrollPath);
      // крутим пока не переключится флаг, т.е. пока не прокрутим до верха
      if (scrollFrom < 0) {
        needToScroll = false;
      }
    }
  }

  const scrollAction = e => {
    e.preventDefault();
    scrollPath = window.scrollY;
    needToScroll = true;

    var move = setInterval(function() {
      scrolling();
    }, 1);
  }
  
  // если на страничке есть стрелка, вешаем слушатель
  if(arrow) arrow.addEventListener('click', scrollAction)
  
};

export default scrollUp;