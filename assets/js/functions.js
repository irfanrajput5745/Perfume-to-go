
////// main slider
$(".category").slick({
  dots: false,
  arrows: true,
  infinite: !0,
  speed: 1000,
  slidesToShow: 5,
  autoplay: !0,
  autoplaySpeed: 4000,
  adaptiveHeight: !0,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
$(".new_products_slider").slick({
  dots: false,
  arrows: true,
  infinite: !0,
  speed: 1000,
  slidesToShow: 5,
  autoplay: !0,
  autoplaySpeed: 4000,
  adaptiveHeight: !0,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
