$('.burger').click(function(){
    $('.burger__line').toggleClass("burger__line--open");
    $(".nav__list").toggleClass("nav__list--open");
});
var count = $('.traitcontainer').children().length;
const size = 180;
let counter = 1;
$('#btnLeft').click(function(){
      if(counter > 1) {
            --counter;
            $('.trait').css('transform', 'translateX(' + -size*(counter-1) + '%)');
      }
      else {
            counter = count;
            $('.trait').css('transform', 'translateX(' + -size*(counter-1) + '%)');
      }
});

$('#btnRight').click(function(){
      if(counter < count) {
            $('.trait').css('transform', 'translateX(' + -size*counter + '%)');
            counter++;
      }
      else {
            $('.trait').css('transform', 'translateX(' + 0 + '%)');
            counter = 1;
      }
});
