AOS.init({
  });

// $('body').awesomeCursor('circle', {
//     color: '#2eff2e' ,
//     size: 32,
//     hotspot: 'center'
// });



// $(window).load(function() {
//     $('#loading').hide();
//   });

$(document)
  .mousemove(function(e) {
    $('.cursor')
      .eq(0)
      .css({
        left: e.clientX,
        top: e.clientY
      });
    setTimeout(function() {
      $('.cursor')
        .eq(1)
        .css({
          left: e.clientX,
          top: e.clientY
        });
    }, 100);
})