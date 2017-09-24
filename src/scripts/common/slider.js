function slider() {
  const slider = document.querySelector('.slider'),
        controls = document.querySelectorAll('.slider__btn'),
        prevSlideScreen = document.querySelector('.slider__bottom-left'),
        currentSlideScreen = document.querySelector('.slider__top'),
        nextSlideScreen = document.querySelector('.slider__bottom-right');
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

        console.log(prevSlideScreen);
        console.log(currentSlideScreen);
        console.log(nextSlideScreen);
        // метод жесткого консоль-логгинга
        console.log('------------- start');
        console.log(prevSlideNumber);
        console.log(currentSlideNumber);
        console.log(nextSlideNumber);
        console.log('------------- ');

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
    prevSlideNewBackground = 'url(../images/works/slides/'+imagesList[prevSlideNumber]+');';
    currentSlideNewBackground = 'url(../images/works/slides/'+imagesList[currentSlideNumber]+');';
    nextSlideNewBackground = 'url(../images/works/slides/'+imagesList[nextSlideNumber]+');';

    // метод жесткого консоль-логгинга
    console.log(prevSlideNumber);
    console.log(currentSlideNumber);
    console.log(nextSlideNumber);
    console.log('-------------');
    console.log(prevSlideNewBackground);
    console.log(currentSlideNewBackground);
    console.log(nextSlideNewBackground);

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