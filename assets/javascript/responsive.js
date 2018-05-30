(function( $ ) {
  $(function() {

          $( window ).scroll(function() {
              
              clearTimeout( $.data( this, "scrollCheck" ) );
              $.data( this, "scrollCheck", setTimeout(function() {
                  // console.log('hello scroll')
                  $('nav').fadeIn('slow')
              }, 500) );

          });

  })
});
//// this is the nav bar toggle
let mainNav=document.getElementById('main-nav');
let navbarToggle=document.getElementById('navbar-toggle');

navbarToggle.addEventListener('click',function(){

    if(this.classList.contains('active')){
        mainNav.style.display="none";
        this.classList.remove('active');
    }
    else{
        mainNav.style.display="flex";
        this.classList.add('active');

    }
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}