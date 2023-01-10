import $ from 'jquery'

$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        navigation : true,
        responsive:{
            0:{
                cards:1
            },
            600:{
                cards:3
            },
            1000:{
                cards:5
            }
        }
    })
})

$(function(){ 
	var offset = 200;
	$(window).scroll(function() {
		if ($(this).scrollTop() > offset ) {
			$('.gototop').css('opacity', '1');
			$('.gototop').css('visibility', 'visible');
		} else if($(this).scrollTop() <= offset) {
			$('.gototop').css('opacity', '0');
			$('.gototop').css('visibility', 'hidden');
		}
	});
		
	$('.gototop').click(function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop: 0}, 300);
		return false;
	});
});