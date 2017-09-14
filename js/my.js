
$(document).ready(function(){
  $('.center').slick({
    infinite: true,
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  });
  $('.single-item').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});
