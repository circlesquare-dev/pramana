// Preloader start

'use strict';

$(window).load(function () {
	setTimeout(function () {
		$('.preloader').fadeOut('slow');
	}, 2500);
});

// Preloader end

// Parallax amination start

function animateProducts(productAnimate, productCover) {
	var delayItem = arguments.length <= 2 || arguments[2] === undefined ? 0.15 : arguments[2];
	var yAnimation = arguments.length <= 3 || arguments[3] === undefined ? 60 : arguments[3];
	var topOffset = arguments.length <= 4 || arguments[4] === undefined ? 500 : arguments[4];

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

	var tl = new TimelineMax().staggerTo(productItem, 0.4, {
		y: 0,
		autoAlpha: 1,
		clearProps: 'transition, transform, opacity',
		ease: Power1.easeOut
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

function animateClass(productAnimate, productCover) {
	var delayItem = arguments.length <= 2 || arguments[2] === undefined ? 0.15 : arguments[2];
	var topOffset = arguments.length <= 3 || arguments[3] === undefined ? 500 : arguments[3];

	var productItem = productAnimate;
	var section = productCover;

	if (!$(section).length) {
		return;
	}

	var tl = new TimelineMax().staggerFromTo(productItem, 0.4, {
		backgroundColor: '#fff',
		autoAlpha: 0,
		transition: 'none'
	}, {
		autoAlpha: 1,
		easing: Power1.easeOut
	}, delayItem).staggerTo(productItem, 0.4, {
		backgroundColor: '#092290',
		clearProps: 'transition, transform, opacity',
		ease: Power1.easeOut
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

	var controller = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: 'onEnter'
		}
	});

	// build scenes
	new ScrollMagic.Scene({
		triggerElement: section,
		offset: 500,
		reverse: true
	}).setClassToggle(productItem, "svg_animation").addTo(controller);
}

// Parallax animation end

$(document).ready(function () {

	// Animation just for web start

	var mobDev = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);

	// if (!mobDev) {
	animateProducts('.main-cover .fade-up', '.main-cover');
	animateProducts('.about-us .fade-up', '.about-us');

	// animateClass('.solutions .cc span','.solutions');
	addAnimateClass('.solutions .svg_item', '.solutions');

	// animateProducts('.solutions .fade-up','.solutions');
	animateProducts('.idea-block .fade-up', '.idea-block');
	animateProducts('.compare .fade-up', '.compare');
	animateProducts('.trust .fade-up', '.trust', 0.25, 0);
	animateProducts('.cta .fade-up', '.cta');
	animateProducts('.footer .fade-up', '.footer', 0.25, 20, 100);

	// SVG Animate
	animateProducts('.about-us .fade-svg1', '.about-us', 0.05, 0);
	animateProducts('.about-us .fade-svg2', '.about-us', 0.05, 0);

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

	$('.hamburger').on('click', function () {
		var $containerMob = $('.main-header_d-menu');
		var $mobMenu = $('.mob-menu');
		var $thisActive = $containerMob.hasClass('active');

		if ($thisActive) {
			$containerMob.removeClass('active');
			$mobMenu.removeClass('active');
		} else {
			$containerMob.addClass('active');
			$mobMenu.addClass('active');
		}
	});

	// Hamburger menu end
});

; // Init controller
var controller = new ScrollMagic.Controller({
	globalSceneOptions: {
		duration: $('section').height(),
		triggerHook: .025,
		reverse: true
	}
});

var scenes = {
	'scene1': {
		'section-1': 'anchor1'
	},
	'scene2': {
		'section-2': 'anchor2'
	},
	'scene3': {
		'section-3': 'anchor3'
	},
	'scene4': {
		'section-4': 'anchor4'
	},
	'scene5': {
		'section-5': 'anchor5'
	},
	'scene6': {
		'section-6': 'anchor6'
	},
	'scene7': {
		'section-7': 'anchor7'
	}
};

for (var key in scenes) {
	// skip loop if the property is from prototype
	if (!scenes.hasOwnProperty(key)) continue;

	var obj = scenes[key];

	for (var prop in obj) {
		// skip loop if the property is from prototype
		if (!obj.hasOwnProperty(prop)) continue;

		new ScrollMagic.Scene({ triggerElement: '#' + prop }).setClassToggle('#' + obj[prop], 'active').addTo(controller);
	}
}

// Change behaviour of controller
// to animate scroll instead of jump
controller.scrollTo(function (target) {

	TweenMax.to(window, 0.5, {
		scrollTo: {
			y: target,
			autoKill: true // Allow scroll position to change outside itself
		},
		ease: Cubic.easeInOut
	});
});

//  Bind scroll to anchor links using Vanilla JavaScript
var anchor_nav = document.querySelector('.anchor-nav');

anchor_nav.addEventListener('click', function (e) {
	var target = e.target,
	    id = target.getAttribute('href');

	if (id !== null) {
		if (id.length > 0) {
			e.preventDefault();
			controller.scrollTo(id);

			if (window.history && window.history.pushState) {
				history.pushState("", document.title, id);
			}
		}
	}
});