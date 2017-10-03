'use strict'

function scrollDown(value) {
  const arrow = document.querySelector('.arrow__link'),
        _window = window;
        // куда скроллить, значение задается при клике через обработчик
  let   scrollDestination, 
        // на сколько скроллить за одну итерацию функции setInterval внизу (аналог скорости)
        // значение задается при клике через обработчик
        scrollValue = value,
        // начальная высота откуда скроллим
        scrollTo,
        // флаг
        needToScroll = false;

  function scrolling() {
    if(needToScroll) {
      // задаем переменной начальную высоту
      scrollTo = window.scrollY,
      // с каждой итерацией изменяем высоту до которой надо прокрутить
      scrollTo = scrollTo + scrollValue;
      _window.scroll(0, scrollTo);
      // крутим пока не переключится флаг, т.е. пока не прокрутим один экран
      if (scrollTo > scrollDestination) {
        needToScroll = false;
      }
    }
  }

  const scrollAction = e => {
    e.preventDefault();
    scrollDestination = window.innerHeight;
    needToScroll = true;

    var move = setInterval(function() {
      scrolling();
    }, 1);
  }

  // если на страничке есть стрелка, вешаем слушатель
  if(arrow) arrow.addEventListener('click', scrollAction)
  
};

export default scrollDown;