function hamMenu() {
  const menu = document.querySelector('.hamburger-menu'),
        button = document.querySelector('.header__hamburger-menu'),
        body = document.body;

  if(button) {
    button.addEventListener('click', e => {
      e.preventDefault();
      button.classList.toggle('active');
      menu.classList.toggle('active');
      body.classList.toggle('overflow');
    });
  }
};

export default hamMenu;