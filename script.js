$(function(){
  var overlay = $('<div id="overlay"></div>');
  overlay.show();
  overlay.appendTo(document.body);
  $('.popup').show();
  $('.close').click(function(){
    $('.popup').hide();
    overlay.appendTo(document.body).remove();
    return false;
    });
  $('.x').click(function(){
    $('.popup').hide();
    overlay.appendTo(document.body).remove();
    return false;
    });
  });

//Date JS

date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
document.getElementById("current_date").innerHTML =
  month + "/" + day + "/" + year;

//Countdown JS
var countDownDate = new Date("Nov 11, 2022 9:00:00").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("demo").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

//Slideshow JS
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

//Pop up JS
$(function () {
  var overlay = $('<div id="overlay"></div>');
  overlay.show();
  overlay.appendTo(document.body);
  $(".popup").show();
  $(".close").click(function () {
    $(".popup").hide();
    overlay.appendTo(document.body).remove();
    return false;
  });

  $(".x").click(function () {
    $(".popup").hide();
    overlay.appendTo(document.body).remove();
    return false;
  });
});
