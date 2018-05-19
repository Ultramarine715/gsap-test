var ajax = new XMLHttpRequest();
ajax.open("GET", "img/img.svg", true);

ajax.onload = function(e) {
  var div = document.createElement("div");
  div.innerHTML = ajax.responseText;
  div.style.display = "none";
  document.body.insertBefore(div, document.body.childNodes[0]);
}

ajax.send();
