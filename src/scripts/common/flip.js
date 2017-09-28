'use strict'

function flip() {
  const doc = document,
        front = doc.querySelector('.intro__flip--front'),
        back = doc.querySelector('.intro__flip--back'),
        login = doc.querySelector('.auth__login'),
        button = doc.querySelector('.intro__authorize-btn');
 
  const invert = (e) => {
    e.preventDefault();
    front.classList.toggle('inverted');
    back.classList.toggle('inverted');
    button.classList.toggle('inverted');
  }

  if(login) {
    login.addEventListener('click', invert);
  }

  if(button) {
    button.addEventListener('click', invert);
  }
};

export default flip;