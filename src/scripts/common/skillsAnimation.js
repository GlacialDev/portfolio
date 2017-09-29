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
        topBorderDetector,
        bottomBorderDetector,
        realItemHeight;

  // когда скроллим страницу, проверяем, находится ли высота элемента
  // в зоне между линиями-детекторами
  // если да - показываем проценты, если нет - убираем их
  _window.addEventListener('scroll', function() {
    // размеры области проверки
    topBorderDetector = _window.scrollY + 0.10*_window.innerHeight,
    bottomBorderDetector = _window.scrollY + 0.90*_window.innerHeight;
    // проверка входит ли элемент в зону для анимирования
    svgList.forEach(function(item, i, svgList) {
      realItemHeight = item.parentElement.offsetTop + _window.innerHeight;
      if(realItemHeight > topBorderDetector && realItemHeight < bottomBorderDetector) {
        item.classList.add('animate'); 
      } else {
        item.classList.remove('animate'); 
      }
    });
  });
}

export default skillsAnimation;