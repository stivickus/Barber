$(() => {

	$.modal = (opts) => {
		var $bg, $close, $header;
		var $modal = $("<div class=\"modal\" tabindex=\"-1\"></div>");
		if (opts.mods) {
			for (let key in ref) {
				$modal.mod(key, opts.mods[key]);
			}
		}
		$modal.append($bg = $("<div class=\"modal__bg\"></div>"));
		$modal.append($header = $("<div class=\"modal__header wrap\"></div>"));
		$header.append($close = $("<div class=\"modal__close\"><span>Вернуться</span></div>"));
		if (opts.title) {
			$header.append($("<div class=\"modal__title\"></div>").text(opts.title));
		}
		if (opts.icon) {
			$header.append($("<div class=\"modal__icon modal__icon_" + opts.icon + "\"></div>"));
		}
		if (opts.content) {
			$modal.append($("<div class=\"modal__content wrap\"></div>").append(opts.content));
		}
		const open = () => {
			$("body").append($modal);
			return setTimeout(() => {
				$modal.mod("state", "opening");
				return setTimeout(() => $modal.mod("state", "opened"), 500);
			}, 1);
		};
		const close = () => {
			if (!$modal) { return; }
			$modal.mod("state", "closing");
			$(document).trigger("modal.closing", [$modal]);
			return setTimeout(() => {
				if (!$modal) { return; }
				$modal.remove();
				$(document).trigger("modal.closed", [$modal]);
				return $modal = null;
			}, 500);
		};
		$modal.on("modal.close", close);
		$close.click(close);
		return open();
	};

});
