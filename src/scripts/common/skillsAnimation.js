'use strict'

function skillsAnimation() {
  const _window = window,
        _document = document,
        // берем все свг-круги на страницы в форме nodeList
        svg = _document.querySelectorAll('.circles'),
        // преобразуем nodeList в массив
        svgList = Array.prototype.slice.call(svg);
  let   // линии детекторы определяют зону на экране, в пределах которой
        // будут анимироваться диаграммы скиллов
        topBorderDetector = 0.05 * _window.innerHeight,
        bottomBorderDetector = 0.95 * _window.innerHeight,
        realItemHeight;

  // когда скроллим страницу, проверяем, находится ли высота элемента
  // в зоне между линиями-детекторами
  // если да - показываем проценты, если нет - убираем их
  const skillsBehavior = e => {
    // проверка входит ли элемент в зону для анимирования
    svgList.forEach(function(item, i, svgList) {
      realItemHeight = item.getBoundingClientRect().y;
      if(realItemHeight > topBorderDetector && realItemHeight < bottomBorderDetector) {
        item.classList.add('animate'); 
      } else {
        item.classList.remove('animate'); 
      }
    });
  }

  _window.addEventListener('scroll', skillsBehavior);

}

export default skillsAnimation;