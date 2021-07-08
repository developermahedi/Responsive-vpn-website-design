window.addEventListener('scroll', function () {
         const navbar = document.querySelector('.navbar');
         navbar.classList.toggle('sticky', window.scrollY > 0);
         
});
//wow js active
{
    new WOW().init();
}
// owl carousel active
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin: 20,
        autoplay: true,
        items: 1,
        
  });
});