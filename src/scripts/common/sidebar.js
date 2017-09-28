'use strict'

function sidebar() {
  const _window = window,
        doc = document,
        articlesList = doc.querySelectorAll('.articles__item'),
        sidebar = doc.querySelector('.sidebar'),
        sidebarStartHeight = sidebar.offsetTop,
        headerHeight = doc.querySelector('.header').offsetHeight;
  let   title,
        titleArray = [],
        titleSidebar,
        sidebarItems,
        detector,
        sidebarList;

  function formSidebar() {
    // формируем массив заголовков статей из блога
    articlesList.forEach(function(item, i, articlesList) {
      title = item.querySelector('.articles__title').textContent;
      titleArray.push(title);
    });
    // формируем сайдбар
    for (let i = 0; i < articlesList.length; i++) {
      // для каждого названия статьи в блоге создаем элемент li, 
      // добавляем его в сайдбар и вешаем стандартный класс стилей
      let li = doc.createElement("li");
      sidebar.appendChild(li);
      li.innerHTML = titleArray.shift();
      li.classList.add('sidebar__item');
    }
  }
  //вызов конструктора сайдбара
  formSidebar();

  _window.addEventListener('scroll', function() {
    fixedMenu();
    setActiveTitle();
  });

  function fixedMenu() {
    // если доскроллили до блога - фиксируем сайдбар
    if(_window.scrollY > sidebarStartHeight) {
      sidebar.classList.add('fix');
    }
    // если скроллим обратно до хедера - оставляем его где он был
    if(_window.scrollY < sidebarStartHeight) {
      sidebar.classList.remove('fix');
    }
  };
  
  function setActiveTitle() {
    // нечто вроде линии-сканера, показывающей в зоне какого элемента массива статей мы находимся
    detector = _window.scrollY + 0.3*_window.innerHeight;
    sidebarList = doc.querySelectorAll('.sidebar__item');

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

export default sidebar;