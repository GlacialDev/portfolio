function flip() {
  const front = document.querySelector('.intro__flip--front'),
        back = document.querySelector('.intro__flip--back'),
        login = document.querySelector('.auth__login'),
        button = document.querySelector('.intro__authorize-btn');

  if(login) {
    login.addEventListener('click', e => {
      e.preventDefault();
      front.classList.toggle('inverted');
      back.classList.toggle('inverted');
      button.classList.toggle('inverted');
    });
  }

  if(button) {
    button.addEventListener('click', e => {
      e.preventDefault();
      front.classList.toggle('inverted');
      back.classList.toggle('inverted');
      button.classList.toggle('inverted');
    });
  }
};

export default flip;