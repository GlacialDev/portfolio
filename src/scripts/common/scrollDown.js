'use strict'

function scrollDown(time) {
  const arrow = document.querySelector('.arrow__link');
        // куда скроллить, значение задается при клике через обработчик
  let   scrollDestination, 
        // на сколько скроллить за одну итерацию функции setInterval внизу (аналог скорости)
        // значение задается при клике через обработчик
        scrollValue,
        // начальная высота откуда скроллим
        scrollTo,
        // флаг
        needToScroll = false;

        // ------------------
        // счетчик милисекунд
        // var i = 0;

  function scrolling() {
    if(needToScroll) {

      // ------------------
      // счетчик милисекунд
      // i++;
      // console.log(i);
      // ------------------

      // задаем переменной начальную высоту
      scrollTo = window.scrollY,
      // с каждой итерацией изменяем высоту до которой надо прокрутить
      scrollTo = scrollTo + scrollValue;
      window.scroll(0, scrollTo);
      // крутим пока не переключится флаг, т.е. пока не прокрутим один экран
      if (scrollTo > scrollDestination) {
        needToScroll = false;
      }
    }
  }

  // если на страничке есть стрелка, вешаем слушатель
  if(arrow) {
    arrow.addEventListener('click', e => {
      e.preventDefault();
      scrollDestination = window.innerHeight;
      scrollValue = scrollDestination / time;
      needToScroll = true;

      var move = setInterval(function() {
        scrolling();
      }, 1);
    })
  }
};

export default scrollDown;