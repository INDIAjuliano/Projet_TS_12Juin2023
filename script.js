$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    center: true,
    loop: true,
    nav: true,
    items: 5,
    navText: ['<h1><</h1>','<h1>></h1>'],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      990: {
        items: 2,
      }
    },
    onInitialized: coverFlowEfx,
    onTranslate: coverFlowEfx,
  });

  function coverFlowEfx(e) {
    if ($('.owl-dots')) {
      $('.owl-dots').remove();
    }
    idx = e.item.index;
    $('.owl-item.big').removeClass('big');
    $('.owl-item.medium').removeClass('medium');
    $('.owl-item.small').removeClass('small');
    $('.owl-item').eq(idx).addClass('big');
    $('.owl-item').eq(idx - 2).addClass('small');
    $('.owl-item').eq(idx + 1).addClass('small');
    $('.owl-item').eq(idx + 1).addClass('small');

    // Activation des divs correspondants
    $('.div1, .div2, .div3').removeClass('active');
    $('.div' + (idx + 1)).addClass('active');
  }
});

$(document).ready(function() {
  // ... Existing code

  // Click event handler for displaying divs
  $('.owl-item').click(function() {
    var divIndex = $(this).index();

    // Remove active class from all divs
    $('.div1, .div2, .div3').removeClass('active');

    // Add active class to the clicked div
    $('.div' + (divIndex + 1)).addClass('active');
  });
});
