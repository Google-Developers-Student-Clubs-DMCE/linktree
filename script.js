window.onload = function(){
    
const mediaQuery = window.matchMedia('(max-width: 768px)')
// Check if the media query is true
if (mediaQuery.matches) {
  AOS.init();
}



var typed = new Typed('#main_heading', {
    strings: ['Google Developer Student Clubs<br>Datta Meghe College Of Engineering ^1000'],
    typeSpeed: 30,
    backSpeed:100,
    showCursor: true,
    cursorChar: '|',
    autoInsertCss: true,
    smartBackspace: true,
    startDelay: 3000,
  });

  var typed = new Typed('#sub_heading', {
    strings: ['Connect with us in one place!'],
    typeSpeed: 50,
    smartBackspace: true,
    startDelay: 3000,
  });
}