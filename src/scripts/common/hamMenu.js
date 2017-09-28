'use strict'

function hamMenu() {
  const doc = document,
        menu = doc.querySelector('.hamburger-menu'),
        button = doc.querySelector('.header__menu'),
        body = doc.body;

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