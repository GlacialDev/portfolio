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
        nextSlideNumber = 2;

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
  }

  function moveSlide() {
    // изменяем номера картинок
    prevSlideNumber = changeToNextNumber(prevSlideNumber);
    currentSlideNumber = changeToNextNumber(currentSlideNumber);
    nextSlideNumber = changeToNextNumber(nextSlideNumber);

    // метод жесткого консоль-логгинга
    console.log(prevSlideNumber);
    console.log(currentSlideNumber);
    console.log(nextSlideNumber);
    console.log('-------------');
    console.log('url(../images/works/slides/'+imagesList[prevSlideNumber]+');');
    console.log('url(../images/works/slides/'+imagesList[currentSlideNumber]+');');
    console.log('url(../images/works/slides/'+imagesList[nextSlideNumber]+');');

    //подставляем в бекграунд картинки, расположенные под новыми номерами, из массива
    prevSlideScreen.style.backgroundImage = 'url(../images/works/slides/'+imagesList[prevSlideNumber]+');';
    currentSlideScreen.style.backgroundImage = 'url(../images/works/slides/'+imagesList[currentSlideNumber]+');';
    nextSlideScreen.style.backgroundImage = 'url(../images/works/slides/'+imagesList[nextSlideNumber]+');';
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