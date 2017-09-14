(function () {
  var element = document.querySelector('.button');
  var prevent = function (e) {e.preventDefault()}
  element.addEventListener('click', prevent);
  })();

module.exports = dontGoPlease;