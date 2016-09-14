$(document).ready(function() {
  $('h1').on('mouseenter', function() {
  	$(this).animate({
    	'font-size': '+=1px'
    }, 'fast');
  });
  $('h1').on('mouseleave', function() {
    $(this).animate({
    	'font-size': '-=1px'
    }, 'fast');
  });
  $('h1').on('click', function () {
  	$(this).siblings().slideToggle();
  });
	$('h2').on('click', function () {
  	$(this).siblings().slideToggle();
  });
  $('h2').on('mouseenter', function() {
  	$(this).animate({
    	'font-size': '+=1px'
    }, 'fast');
  });
  $('h2').on('mouseleave', function() {
    $(this).animate({
    	'font-size': '-=1px'
    }, 'fast');
  });
  $('figure').on('mouseenter', function () {
    $(this).children('img').animate({
      'height': '+=15px',
      'width': '+=15px'
    });
    $(this).children().animate({
    	'font-size': '+=3px',
    });
    $(this).children().css({
      'font-weight': 'bold'
    });
  });
  $('figure').on('mouseleave', function () {
    $(this).children('img').animate({
      'height': '-=15px',
      'width': '-=15px'
    });
    $(this).children().animate({
    	'font-size': '-=3px',
    });
    $(this).children().css({
      'font-weight': 'normal'
    });
  });
});
