import IScroll from "../js/lib/iscroll";

var wrapper = $(".scroll-wrap").first().get(0)
var $wrapper = $(".scroll-wrap").first()

if ($wrapper.length > 0) {
	var myScroll = new IScroll(wrapper, {
		scrollbars: true,
		interactiveScrollbars: true,
		mouseWheel: true,
		click: true,
	});
}


var toggleScrollBarTimeout = 0;
var toggleScrollBar = function() {
	clearTimeout(toggleScrollBarTimeout);
	toggleScrollBarTimeout = setTimeout(function(){
		$(".iScrollIndicator").each(function(){
			$(this).closest(".iScrollVerticalScrollbar").toggleClass("active", $(this).css("display") != "none");
		});
	}, 200);
};

toggleScrollBar();
$(window).on('resize orientationchange', toggleScrollBar);


$('.embed-responsive').each(function(){
	var $this = $(this);
	var $iframe = $this.find('iframe');
	var youtubeId = $iframe.data('youtubeId');
	var coverUrl = 'https://img.youtube.com/vi/' + youtubeId + '/hqdefault.jpg';
	var $cover = $("<div class='embed-responsive-cover' style='position:absolute; width:100%; height:100%; top:0; left:0; right:0; bottom:0; z-index:2; background-image:url(" + coverUrl + ")'/>");
	$this.append( $cover );

	$this.on('click', function(event){
		$iframe.attr('src', 'https://www.youtube.com/embed/' + youtubeId + '?autoplay=1&rel=0&showinfo=0&enablejsapi=1');
		$cover.fadeOut(300);
	});
})
