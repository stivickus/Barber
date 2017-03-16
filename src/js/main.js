import lazyload from 'jquery-lazyload'

$(() => {
	$('img[data-original]').lazyload({
		effect : "fadeIn"
	})
})
