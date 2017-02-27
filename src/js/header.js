import { TweenMax, Power1 } from "../js/lib/TweenMax";

$(() => {

	const $logo = $(".header__logo");
	if (!$logo.length) { return; }
	TweenMax.fromTo($logo, 0.6, { autoAlpha: 0, y: -5, ease: Power1.easeIn }, {autoAlpha: 1, y:0 , ease: Power1.easeIn}, 1);

});
