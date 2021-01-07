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

// When the user scrolls down 20px from the top of the document, show the button
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

//navbartoggler fix

$('.navbar-nav>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

//end navbartoggler fix

//console messege
const style1 =[
	'color: #00daff',
  'text-shadow: 2px 2px #6a5acd', 
  'background: #e3cbff', 
  'font-size: 2em',
  'border: 1px solid #6a5acd',
  'padding: 20px',
  'font-family: cursive;'
].join(';');

1
console.log('%cWelcome to my Portfolio', style1);

const style2 =[ 
     'background-image: url(https://ux.christmas//static/teaser-1-95bcc16151dc1d561bd79ede903e9e7c.jpg)', 
     'background-size: cover', 
     'color: #fff', 
     'padding: 20px', 
     'font-size: 1.5em',  
     'text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;'
      ].join(';');
console.log('%ci hope you enjoy it!', style2);


