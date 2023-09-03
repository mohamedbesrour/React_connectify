
function afficherPhotos() {
  var photos = document.getElementById("galerie_mini");
  var liens = photos.getElementsByTagName("a");

  var objet_photo = document.getElementById("la_photo");
  var titre_photo = document
    .getElementById("photo")
    .getElementsByTagName("dt")[0];

  for (var i = 0; i < liens.length; i++) {
    liens[i].onclick = function () {
      objet_photo.src = this.href;
      titre_photo.innerText = this.title;
      return false;
    };
  }
}
window.onload = afficherPhotos;