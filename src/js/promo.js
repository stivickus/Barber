import { TweenMax } from "../js/lib/TweenMax";

$(() => {

	const $video = $(".promo__video");
	if (!$video.length) { return; }
	const $block = $(".promo");
	const $skip = $(".promo__skip");
	const $sound = $(".promo__sound");
	//$timer = $(".promo__timer");
	const $timerInner = $(".promo__timer-inner");
	const $path = $(".promo__timer .st0");
	$skip.on("click", () => {
		TweenMax.to($block, 0.5, { autoAlpha: 0 });
		return setTimeout(() => $block.remove(), 600);
	});
	$video.on("timeupdate", event => {
		let sec = Math.floor($video.get(0).duration - $video.get(0).currentTime);
		let current = $video.get(0).currentTime;
		let percent = $video.get(0).duration / 100;
		let percents = Math.round(current / percent);
		let stroke = 88;
		let strokePercent = stroke / 100;
		let strokeValue = stroke - (strokePercent * percents);
		$path.css({ "stroke-dashoffset": strokeValue });
		let timeMin = Math.floor(sec / 60);
		if (timeMin === 0) { timeMin = ""; }
		let timeSec = Math.round(sec % 60);
		if (timeSec < 10) { timeSec = `0${timeSec}`; }
		let timer = `${timeMin}.${timeSec}`;
		return $timerInner.html(timer);
	});
	return $sound.on('click', event => {
		if ($sound.toggleClass('active').hasClass('active')) {
			return TweenMax.to($video, 1, { volume: 0 });
		} else {
			return TweenMax.to($video, 1, { volume: 1 });
		}
	});

});
