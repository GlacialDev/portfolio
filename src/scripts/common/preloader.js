'use strict';

function preloader() {
  
  window.onload = function() {
    document.querySelector('.preloader').classList.add('contentLoaded');
  };

}

export default preloader;