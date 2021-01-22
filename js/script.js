//lozad lazy load


const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();



//end lozad


//image bootstrap carousel

var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)

//end image bootstrap carousel

//spy scroll

$('body').scrollspy({ target: '#navbarMenu' })

//end spy scroll

//back to top button

//Get the button:
mybutton = document.getElementById("backToTop");

// When the user scrolls down show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
//end back to top button

//navbartoggler button fix - hide when click

$('.navbar-nav>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

//end navbartoggler button fix

