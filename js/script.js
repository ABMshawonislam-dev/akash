// ========JS Plugin


// ==========skills progressbar

$('#ps-bar').LineProgressbar({
  percentage: 90,
  radius: '3px',
  height: '10px',
  fillBackgroundColor: 'rgb(42, 72, 150)',
  // trasfrom: rotate(900 deg)
});

$('#li-bar').LineProgressbar({
  percentage: 85,
  radius: '3px',
  height: '10px',
  fillBackgroundColor: 'rgb(93, 59, 21)'
  // trasfrom: rotate(900 deg)
});

$('#dw-bar').LineProgressbar({
  percentage: 75,
  radius: '3px',
  height: '10px',
  fillBackgroundColor: 'rgb(52, 74, 31)'
  // trasfrom: rotate(900 deg)
});

$('#ae-bar').LineProgressbar({
  percentage: 80,
  radius: '3px',
  height: '10px',
  fillBackgroundColor: 'rgb(57, 41, 96)'
  // trasfrom: rotate(900 deg)
});
// ==========skills progressbar


// ==========ServiceSlider
$('.service-slider').slick({
  dots: false,
  infinite: true,
  arrows: false,
  autoplay: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// ==========ServiceSlider

// ==========testi Slider
$('.testi-slider').slick({
  dots: false,
  infinite: true,
  arrows: false,
  autoplay: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// ==========testi Slider

// ==========blog Slider
$('.blog-slider').slick({
  dots: false,
  infinite: true,
  arrows: false,
  autoplay: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// ==========blog Slider