// Preloader start

$(window).load(function () {
	setTimeout(function () {
		$('.preloader').fadeOut('slow');
	}, 2500);
});

// Preloader end

// Parallax amination start

function animateProducts(productAnimate, productCover, delayItem = 0.15, yAnimation = 60, topOffset = 500) {
	var productItem = productAnimate;
	var section = productCover;
	
	if (!$(section).length) {
		return;
	}
	
	TweenMax.set(productItem, {
		y: yAnimation,
		autoAlpha: 0,
		transition: 'none'
	});
	
	const tl = new TimelineMax()
		.staggerTo(productItem, 0.4, {
			y: 0,
			autoAlpha: 1,
			clearProps: 'transition, transform, opacity',
			ease:Power1.easeOut
		}, delayItem);
	
	var controller = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: 'onEnter'
		}
	});
	
	// build scenes
	new ScrollMagic.Scene({
		triggerElement: section,
		offset: topOffset,
		reverse: true
	}).setTween(tl).addTo(controller);

}

function animateClass(productAnimate, productCover, delayItem = 0.15, topOffset = 500) {
	
	var productItem = productAnimate;
	var section = productCover;
	
	if (!$(section).length) {
		return;
	}
	
	const tl = new TimelineMax()
	.staggerFromTo(productItem, 0.4, {
		backgroundColor: '#fff',
		autoAlpha: 0,
		transition: 'none'
	}, {
		autoAlpha: 1,
		easing: Power1.easeOut
	}, delayItem)
	.staggerTo(productItem, 0.4, {
		backgroundColor: '#092290',
		clearProps: 'transition, transform, opacity',
		ease:Power1.easeOut
	}, delayItem);
	
	var controller = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: 'onEnter'
		}
	});
	
	// build scenes
	new ScrollMagic.Scene({
		triggerElement: section,
		offset: topOffset,
		reverse: true
	}).setTween(tl).addTo(controller);
	
}

function addAnimateClass(productAnimate, productCover) {
	
	var productItem = productAnimate;
	var section = productCover;
	
	if (!$(section).length) {
		return;
	}
	
	const tl = new TimelineMax()
	.staggerTo(productItem, 0.5, {css:{className:'+=svg_animation'}});
	
	var controller = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: 'onEnter'
		}
	});
	
	// build scenes
	new ScrollMagic.Scene({
		triggerElement: section,
		offset: topOffset,
		reverse: true
	}).setTween(tl).addTo(controller);
	
}

// Parallax animation end

$(document).ready( function(){
	
	// Animation just for web start
	
	var mobDev = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
	
	// if (!mobDev) {
		animateProducts('.main-cover .fade-up','.main-cover');
		animateProducts('.about-us .fade-up','.about-us');
		
		// animateClass('.solutions .cc span','.solutions');
		addAnimateClass('.solutions .svg_item','.solutions');
		
		// animateProducts('.solutions .fade-up','.solutions');
		animateProducts('.idea-block .fade-up', '.idea-block');
		animateProducts('.compare .fade-up', '.compare');
		animateProducts('.trust .fade-up', '.trust', 0.25, 0);
		animateProducts('.cta .fade-up', '.cta');
		animateProducts('.footer .fade-up', '.footer', 0.25, 20, 100);
		
		// SVG Animate
		animateProducts('.about-us .fade-svg1','.about-us', 0.05, 0);
		animateProducts('.about-us .fade-svg2','.about-us', 0.05, 0);
		
	// }
	
	// Animation just for web end
	
	// Smooth anchor scroll start
	
	$(document).on('click', 'a[href^="#"]', function (event) {
		event.preventDefault();
		
		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 500);
	});
	
	// Smooth anchor scroll end
	
	// Hamburger menu start
	
	$('.hamburger').on('click', function() {
		var $containerMob = $('.main-header_d-menu');
		var $mobMenu = $('.mob-menu');
		var $thisActive = $containerMob.hasClass('active');
		
		if($thisActive) {
			$containerMob.removeClass('active');
			$mobMenu.removeClass('active');
		} else {
			$containerMob.addClass('active');
			$mobMenu.addClass('active');
		}
		
	});
	
	// Hamburger menu end
	
});


