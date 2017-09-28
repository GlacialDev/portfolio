'use strict'

function hamMenu() {
  const _document = document,
        menu = _document.querySelector('.hamburger-menu'),
        button = _document.querySelector('.header__menu'),
        body = _document.body;

  if(button && menu) {
    button.addEventListener('click', e => {
      e.preventDefault();
      button.classList.toggle('active');
      menu.classList.toggle('active');
      body.classList.toggle('overflow');
    });
  }
};

export default hamMenu;