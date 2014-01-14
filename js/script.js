var isTouch = 'ontouchstart' in window || 'onmsgesturechange' in window;

$(function() {

	/* Special thanks to touche.js 				*/
	/* https://github.com/benhowdle89/touche 	*/

	if(isTouch) {
		var originalOnMethod = jQuery.fn.on;
		jQuery.fn.on = function () {
			var event = arguments[0];
			arguments[0] = event === 'click' ? 'touchend' : event;
			originalOnMethod.apply(this, arguments);
			return this;
		};
	}

	$('.nav-btn-menu').on('click', function(e) {

		e.stopPropagation();
		e.preventDefault();

		if($('.menu').hasClass('active')) {
			$('.menu, .menu li').removeClass('active');
			$('.menu ul').css('left', '');
		} else {
			$('.menu').addClass('active');
		}
	});
	
	$('body').on('click', '.menu .arrow', function(e) {

		e.stopPropagation();
		e.preventDefault();

		if(!checkIfTouchMoved(this)) {
			return;
		}

		$(this).parent().addClass('active').siblings().removeClass('active');
		$('.menu').data('active-li', $(this).parent());

		var parents = $(this).parents('li');
		for(var i = 0, l = parents.length; i < l; i++) {
			$(parents[i]).children('ul').css('left', 48 - (i * 48 / l));
		}
	});
	$('body').on('touchmove', '.menu .arrow', function(e) {
		this.touchmove = true;
	});

	$('body').on('click', function(e) {
		
		e.preventDefault();
		e.stopPropagation();

		var activeLi = $('.menu').data('active-li');
		if(typeof activeLi === "undefined" || !activeLi.length) {
			$('.menu').removeClass('active');
		} else {
			activeLi.removeClass('active');
			activeLi.children('ul').css('left', '');

			var parents = activeLi.parents('li');
			for(var i = 0, l = parents.length; i < l; i++) {
				$(parents[i]).children('ul').css('left', 48 - (i * 48 / l));
			}
			$('.menu').data('active-li', activeLi.parents('li:first'));
		}
	});

	$('body').on('click selectstart', '.menu a', function(e) {
		e.preventDefault();
		e.stopPropagation();

		return false;
	});

	$('.menu').on('selectstart', function(e) {
		e.preventDefault();
		return false;
	});

	function buildMenu() {

		var $menu = $('.menu');

		function recurse(item, parent) {

			var children = item.children;

			var header = $('<li>').text(item.label).addClass('header');

			parent.append(header);

			for(var i = 0; i < children.length; i++) {

				var child = children[i];

				// Create li
				var $li = $('<li>');

				// Create item
				if(typeof child.href !== "undefined") {
					var $item = $('<a>').text(child.label).attr('href', '#' + child.href);
				} else {
					var $item = $('<span>').text(child.label).addClass('item');
				}

				$li.append($item);
				parent.append($li);

				// Create children
				if(typeof child.children !== 'undefined') {

					// Add drilldown arrow
					var $arrow = $('<span>&#9658;</span>').addClass('arrow');
					$li.prepend($arrow).addClass('parent');

					// Create ul
					var $ul = $('<ul>');
					$li.append($ul);

					recurse(child, $ul);
				}
			}
		}
		recurse(iAmLazy, $menu);
	}
	buildMenu();

	function checkIfTouchMoved(item) {
		if(typeof item.touchmoved !== "undefined" && item.touchmoved) {
			item.touchmoved = false;
			return false;
		} else {
			return true;
		}
	}

});