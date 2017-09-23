function hamMenu() {
  const button = document.querySelector('.header__hamburger-menu'),
        menu = document.querySelector('.hamburger-menu');

  button.addEventListener('click', e => {
    e.preventDefault();
    button.classList.toggle('active');
    menu.classList.toggle('active');
  })
}

export default hamMenu;