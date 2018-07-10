var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" s-active", "");
  }

  $(slides[slideIndex - 1]).css({
    "display": "none",
    "opacity": "0"
  });

  $(slides[slideIndex - 1]).animate({
    opacity: '1'
  }, 900).show();

  slides[slideIndex - 1].style.display = "block";

  dots[slideIndex - 1].className += " s-active";
}