var carouselIndex = 1;
var x = 0; 
(function(){
  if (x==2) {
    x = 0
  }
  setInterval(()=>plusSlides(x),3000);
  x++
})();

function plusSlides(n) {
  showSlides(carouselIndex += n);
}

function currentSlide(n) {
  showSlides(carouselIndex = n);
}

function showSlides(n) {
  var i;
  var carousel = document.getElementsByClassName("carousel");
  var buttons = document.getElementsByClassName("button");
  if (n > carousel.length) {carouselIndex = 1}    
  if (n < 1) {slideIndex = carousel.length}
  for (i = 0; i < carousel.length; i++) {
      carousel[i].style.display = "none";  
  }
  for (i = 0; i < buttons.length; i++) {
      buttons[i].className = buttons[i].className.replace(" active", "");
  }
  carousel[carouselIndex-1].style.display = "block";  
  buttons[carouselIndex-1].className += " active";
}