function dontGoPlease(event) {
  var el = document.getElementsByClassName('button');
  console.log(el);
  console.log(el[0]);
  el.addEventListener("click", el.preventDefault(), false)
}

module.exports = dontGoPlease;