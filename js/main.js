jQuery(document).ready(function($){
	//Toggle NAV
	$('.ts-nav-trigger').on('click', function(){
		$('.ts-menu-icon').toggleClass('is-clicked'); 
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
});