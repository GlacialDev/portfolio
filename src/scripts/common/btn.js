function dontGoPlease() {
  var elem = document.getElementsByClassName('button');

  elem.onclick = event.preventDefault();
}

module.exports = dontGoPlease;