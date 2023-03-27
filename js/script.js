function slowScroll(id) {
	var offset = 0;
	$('html, body').animate({
	   scrollTop: $(id).offset().top - offset
	}, 1000);
	return false;
 }

$(document).ready(function(){
	$('.carousel__inner').slick({
		speed: 1000,
		adaptiveHeight: true,
		autoplay: true,
	 	// autoplaySpeed: 2000,
			prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left.png"></button>',
			nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_right.png"></button>',
			responsive: [
				{
					breakpoint: 768,
					settings: {
						dots: false,
						arrows: false
					}
				}
		]
});
});
$(document).ready(function(){
 
	$(window).scroll(function(){
	if ($(this).scrollTop() > 600) {
	$('.scrollup').fadeIn();
	} else {
	$('.scrollup').fadeOut();
	}
	});
	 
	$('.scrollup').click(function(){
	$("html, body").animate({ scrollTop: 0 }, 600);
	return false;
	});
	 
	});

	window.addEventListener('DOMContentLoaded', () => {
		const menu = document.querySelector('.header__menu'),
		menuItem = document.querySelectorAll('.header__menu-item'),
		hamburger = document.querySelector('.hamburger');
	
		hamburger.addEventListener('click', () => {
			hamburger.classList.toggle('hamburger_active');
			menu.classList.toggle('header__menu_active');
		});
	
		menuItem.forEach(item => {
			item.addEventListener('click', () => {
				hamburger.classList.toggle('hamburger_active');
				menu.classList.toggle('header__menu_active');
			});
		});
	});
	