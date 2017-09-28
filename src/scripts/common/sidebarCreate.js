'use strict'

function sidebarCreate() {
  if (document.querySelector('.sidebar')) {
    const _document = document,
          articlesList = _document.querySelectorAll('.articles__item'),
          sidebar = _document.querySelector('.sidebar');
    let   title,
          titleArray = [];

    // формируем массив заголовков статей из блога
    articlesList.forEach(function(item, i, articlesList) {
      title = item.querySelector('.articles__title').textContent;
      titleArray.push(title);
    });
    // формируем сайдбар
    for (let i = 0; i < articlesList.length; i++) {
      // для каждого названия статьи в блоге создаем элемент li, 
      // добавляем его в сайдбар и вешаем стандартный класс стилей
      let li = _document.createElement("li");
      sidebar.appendChild(li);
      li.innerHTML = titleArray.shift();
      li.classList.add('sidebar__item');
    }
  }
}

export default sidebarCreate;