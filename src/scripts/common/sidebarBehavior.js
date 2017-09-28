'use strict'


function sidebarBehavior(value) {
  if (document.querySelector('.sidebar')) {
    const _window = window,
          _document = document,
          sidebar = _document.querySelector('.sidebar'),
          sidebarList = _document.querySelectorAll('.sidebar__item'),
          sidebarStartHeight = sidebar.offsetTop,
          articlesList = _document.querySelectorAll('.articles__item'),
          scrollValue = value;
    let   scrollCurrentValue,
          scrollDestination,
          scrollFrom,
          needToScroll = false;

    // этим циклом связываем каждое название в сайдбаре
    // с соответствующей статьей в блоге
    // и вешаем слушатель на клик по названию
    sidebarList.forEach(function(item, i, sidebarList) {
      item.addEventListener('click', function() {
        // задаем начальную высоту где мы находимся
        scrollCurrentValue = _window.scrollY;
        // задаем конечную высоту куда проскроллить
        scrollDestination = sidebarStartHeight+articlesList[i].offsetTop;
        // если мы ниже чем нам нужно
        if (scrollCurrentValue > scrollDestination) {
          needToScroll = true;
          var move = setInterval(function() {
            scrollUp();
            if (scrollCurrentValue < scrollDestination) {
              needToScroll = false;
              clearInterval(move);
            }
          }, 1);
        }
        // если мы выше чем нам нужно
        if (scrollCurrentValue < scrollDestination) {
          needToScroll = true;
          var move = setInterval(function() {
            scrollDown();
            if (scrollCurrentValue > scrollDestination) {
              needToScroll = false;
              clearInterval(move);
            }
          }, 1);
        }
      })
    });

    function scrollUp() {
      if(needToScroll) {
        // с каждой итерацией изменяем высоту до которой надо прокрутить
        scrollCurrentValue = scrollCurrentValue - scrollValue;
        // пока не достигнем нужной высоты
        window.scroll(0, scrollCurrentValue);
      }
    }

    function scrollDown() {
      if(needToScroll) {
        // с каждой итерацией изменяем высоту до которой надо прокрутить
        scrollCurrentValue = scrollCurrentValue + scrollValue;
        // пока не достигнем нужной высоты
        window.scroll(0, scrollCurrentValue);
      }
    } 
  }
}

export default sidebarBehavior;