$(window).scroll(function(){
  var sPos = $(this).scrollTop();
  $(".jet").css({
    'right' : sPos/4 + '%'
  });
});