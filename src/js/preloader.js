import { TweenMax, Power1 } from "../js/lib/TweenMax";

window.onload = () => {
	window.loaded = true
}

$(() => {

	const $window = $(window);
	const $preloader = $(".preloader");
	if (!$preloader.length) { return; }
	const $dot = $(".preloader__dot");
	const $video = $(".promo video");
	const $greatLogo = $(".header__logo_great");
	const fadePreloader = () => {
		TweenMax.to($preloader, 0.5, {
			autoAlpha: 0
		});
		if ($video.length) { $video[0].play(); }
		return setTimeout(() => {
			$preloader.remove();
			return $greatLogo.css("pointer-events", "all");
		}, 100);
	};
	const dotsFade = () => TweenMax.staggerTo($dot, 0.6, {
		autoAlpha: 1,
		ease: Power1.easeIn,
		repeat: -1,
		repeatDelay: 0.7,
		yoyo: true
	}, 0.6);
	dotsFade();
	if (window.loaded) {
		fadePreloader()
	} else {
		$window.on('load', fadePreloader);
	}
});
