'use strict'

function sidebarStyles() {
  if (document.querySelector('.sidebar')) {
    const _window = window,
          _document = document,
          articlesList = _document.querySelectorAll('.articles__item'),
          sidebar = _document.querySelector('.sidebar'),
          sidebarStartHeight = sidebar.offsetTop,
          headerHeight = _document.querySelector('.header').offsetHeight;
    let   titleSidebar,
          sidebarItems,
          detector,
          sidebarList;

    _window.addEventListener('scroll', function() {
      fixedMenu();
      setActiveTitle();
    });

    function fixedMenu() {
      // если доскроллили до блога - фиксируем сайдбар
      if(_window.scrollY > sidebarStartHeight) {
        sidebar.classList.add('fixed');
      }
      // если скроллим обратно до хедера - оставляем его где он был
      if(_window.scrollY < sidebarStartHeight) {
        sidebar.classList.remove('fixed');
      }
    };
    
    function setActiveTitle() {
      // нечто вроде линии-сканера, показывающей в зоне какого элемента массива статей мы находимся
      detector = _window.scrollY + 0.3*_window.innerHeight;
      sidebarList = _document.querySelectorAll('.sidebar__item');

      articlesList.forEach(function(item, i, articlesList) {
        // если линия пересекает высоту, на которой начинается статья
        if (detector > headerHeight+articlesList[i].offsetTop) {
          
          // статье и соответствующему заголовку в сайдбаре ставится active, а соседним удаляется
          if(sidebarList[i-1]) sidebarList[i-1].classList.remove('active');
          if(sidebarList[i+1]) sidebarList[i+1].classList.remove('active');
          sidebarList[i].classList.add('active');

          if(articlesList[i-1]) articlesList[i-1].classList.remove('active');
          if(articlesList[i+1]) articlesList[i+1].classList.remove('active');
          articlesList[i].classList.add('active');
        }
      });   
    }
  }
}

export default sidebarStyles;