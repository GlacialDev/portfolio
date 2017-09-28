'use strict'

function slider() {
  const _document = document,
        slider = _document.querySelector('.slider'),
        controls = _document.querySelectorAll('.slider__btn'),
        prevSlideScreen = _document.querySelector('.slider__bottom-left'),
        currentSlideScreen = _document.querySelector('.slider__top'),
        nextSlideScreen = _document.querySelector('.slider__bottom-right');
        //список картинок в слайдере
  let   imagesList = [
          'slide0.png',
          'slide1.jpg',
          'slide2.jpg',
          'slide3.jpg',
          'slide4.jpg'
        ],
        //номер в массиве картинки в маленьком левом слайдере
        prevSlideNumber = 0,
        //номер в массиве картинки в центральном слайдере
        currentSlideNumber = 1,
        //номер в массиве картинки в маленьком правом слайдере
        nextSlideNumber = 2,
        prevSlideNewBackground,
        currentSlideNewBackground,
        nextSlideNewBackground;

  // если число вылазит за максимальный номер в массиве, отправляем в начало (0)
  // иначе просто инкрементируем
  function changeToNextNumber(number) {
    if (number < imagesList.length - 1) {
      number++;
    } else {
      number = 0;
    }
    return number;
  };

  // если число вылазит за минимальный номер в массиве (0), отправляем в конец
  // иначе просто декрементируем
  function changeToPrevNumber(number) {
    if (number <= 0) {
      number = imagesList.length - 1;
    } else {
      number--;
    }
    return number;
  }

  function moveSlide() {
    // изменяем номера картинок
    prevSlideNumber = changeToNextNumber(prevSlideNumber);
    currentSlideNumber = changeToNextNumber(currentSlideNumber);
    nextSlideNumber = changeToNextNumber(nextSlideNumber);
    // задаем адреса новых картинок для бекграунда
    prevSlideNewBackground = "url(assets/images/works/slides/"+imagesList[prevSlideNumber]+")";
    currentSlideNewBackground = "url(assets/images/works/slides/"+imagesList[currentSlideNumber]+")";
    nextSlideNewBackground = "url(assets/images/works/slides/"+imagesList[nextSlideNumber]+")";
    //подставляем в бекграунды новые картинки
    prevSlideScreen.style.backgroundImage = prevSlideNewBackground;
    currentSlideScreen.style.backgroundImage = currentSlideNewBackground;
    nextSlideScreen.style.backgroundImage = nextSlideNewBackground;
  }

  // если на страничке есть слайдер, вешаем слушатель
  if(slider) {
    controls[0].addEventListener('click', e => {
      e.preventDefault();
      moveSlide();
    });
    controls[1].addEventListener('click', e => {
      e.preventDefault();
      moveSlide();
    })
  }
}

export default slider;