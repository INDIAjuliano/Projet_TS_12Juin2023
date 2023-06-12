$('.owl-carousel').owlCarousel({
  center: true,
  loop: true,
  nav: true,
  items: 5,
  navText: ['<h1 style="outline: none;"><</h1>','<h1 style="outline: none;">></h1>'],
  responsive:{
    0:{
      items: 1,
    },
    768:{
      items: 1,
    },
    990:{
      items: 2,
    }
  },
  onInitialized: coverFlowEfx,
  onTranslate: coverFlowEfx,
});

function coverFlowEfx(e){
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
}


// var events = document.querySelectorAll('.event');
// var currentEventIndex = 0;

// // Affiche le premier événement
// events[currentEventIndex].classList.add('active');

// function nextEvent() {
//   events[currentEventIndex].classList.remove('active');
  
//   // Passage à l'événement suivant
//   currentEventIndex++;
  
//   // Si on a atteint le dernier événement, revenir au premier
//   if (currentEventIndex >= events.length) {
//     currentEventIndex = 0;
//   }
  
//   events[currentEventIndex].classList.add('active');
// }

var click = false;

$('#play-carousel').click(function(evt) {
  click = !click;
  if(click){
    $('.status').html('Autoplay: ON');
    $('.owl-carousel').trigger('play.owl.autoplay', [1000, 1000]);
    $(this).html("Our premium food");
  } else {
    $('.owl-carousel').trigger('stop.owl.autoplay');
    $(this).html("Our premium food");
    $('.status').html('Autoplay: OFF');
  }

});

