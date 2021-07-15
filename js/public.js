$(function() {
  function zoomOff() {
    $(this).css({
      '-webkit-mask-image': ''
    });
    $('.mag').hide();
  }

  function zoom(e) {
    var mouseX = e.pageX - $(this).offset().left,
      mouseY = e.pageY - $(this).offset().top,
      w = $(this).width(),
      h = $(this).height();
    $('.small').css({
      'background-position': (mouseX / w * 100) + '% ' + (mouseY / h * 100) + '%'
    });
    $(this).css({
      '-webkit-mask-image': 'radial-gradient(circle 70px at ' + mouseX + 'px ' + mouseY + 'px, rgba(255,255,255,1) 90%, rgba(255,255,255,0) 100%)',
      'cursor': 'none'
    });
    $('.mag').show().css({
      'left': mouseX,
      'top': mouseY
    });
    
  }

  $('.small').on({
    'mousemove': zoom,
    'mouseleave': zoomOff
  });
});
