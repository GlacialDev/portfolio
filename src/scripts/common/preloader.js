'use strict';

function preloader() {
  const preloader = document.querySelector('.preloader');

  window.onload = function() {
    preloader.classList.add('contentLoaded');
    preloader.style.display="none";
  };

}

export default preloader;