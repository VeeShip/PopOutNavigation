$(document).ready(function($){
	//Toggle NAV

	//MENU ICON : ON CLICK
	$('.ts-nav-trigger').on('click', function(){
		if( $('.ts-nav').hasClass('is-visible') ) {
			$('.nav-icon').removeClass('fa-remove').addClass('fa-bars');
			$('.ts-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').removeClass('overflow-hidden');
			});
		} else {
			$('.nav-icon').removeClass('fa-bars').addClass('fa-remove');
			$('.ts-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').addClass('overflow-hidden');
			});	
		}
	});

	// NAV LINKS : ON CLICK
	$('.nav-btn').on('click', function() {
			$('.nav-icon').removeClass('fa-remove').addClass('fa-bars');
			$('.ts-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').removeClass('overflow-hidden');
			});
	}), false;

	// LOGO : ON CLICK
	$('.ts-logo').on('click', function() {
			$('.nav-icon').removeClass('fa-remove').addClass('fa-bars');
			$('.ts-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').removeClass('overflow-hidden');
			});
	}), false;

	// ESC : ON KEYUP
	$(document).keyup( function(e) {
		if( e.keyCode == 27) {
			$('.nav-icon').removeClass('fa-remove').addClass('fa-bars');
			$('.ts-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').removeClass('overflow-hidden');
			});
		}
	}), false;
});