// AOS.init({
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


const loader = document.querySelector(".loader");
      window.onload = () => {
        setTimeout(function(){
          loader.style.opacity = "0";
          setTimeout(function(){
          loader.style.display = "none";
        }, 500);
        }, 1500);
      }