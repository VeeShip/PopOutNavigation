jQuery(document).ready(function($){
	//open/close primary navigation
	$('.ts-nav-trigger').on('click', function(){
		$('.ts-menu-icon').toggleClass('is-clicked'); 
		
		//in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
		if( $('.ts-nav').hasClass('is-visible') ) {
			$('.ts-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').removeClass('overflow-hidden');
			});
		} else {
			$('.ts-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').addClass('overflow-hidden');
			});	
		}

		//change bars icon to x icon
		
	});


});