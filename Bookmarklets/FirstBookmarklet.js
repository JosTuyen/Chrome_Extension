(function () {
  console.log("Bookmarklets starting");
  var content = document.getElementsByTagName('p');
  for (var i = 0; i < content.length; i++) {
    content[i].innerHTML = 'takeshi';
  }
})();
