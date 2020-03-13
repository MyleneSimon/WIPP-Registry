/*
	Arcana by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
(function($) {

	skel.breakpoints({
		wide: '(max-width: 1680px)',
		normal: '(max-width: 1280px)',
		narrow: '(max-width: 980px)',
		narrower: '(max-width: 840px)',
		mobile: '(max-width: 736px)',
		mobilep: '(max-width: 480px)'
	});

	skel.breakpoints({
		wide: '(max-width: 1680px)',
		normal: '(max-width: 1280px)',
		narrow: '(max-width: 980px)',
		//narrower: '(max-width: 900px)',
		//mobile: '(max-width: 500px)',
		mobilep: '(max-width: 980px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
        $body.addClass('is-loading');

		// Disable animations/transitions until the page has loaded.
        setTimeout(function(){
            $(document).ready( function() {
                $body.removeClass('is-loading');
            });
        });

		// Fix: Placeholder polyfill.
        $('form').placeholder();

		// Prioritize "important" elements on narrower.
        /*skel.on('+narrower -narrower', function() {
            $.prioritize(
                '.important\\28 narrower\\29',
                skel.breakpoint('narrower').active
            );
        });*/



		// Off-Canvas Navigation.

        // Title Bar.
        $(
            '<div id="titleBar">' +
                '<a href="#navPanel" class="toggle"></a>' +
                '<span class="title">' + $('#logo').html() + '</span>' +
            '</div>'
        )
            .appendTo($body);

        // Navigation Panel.
        $(
            '<div id="navPanel">' +
                '<nav>' +
                    $('#nav').navList() +
                '</nav>' +
            '</div>'
        )
            .appendTo($body)
            .panel({
                delay: 500,
                hideOnClick: true,
                hideOnSwipe: true,
                resetScroll: true,
                resetForms: true,
                side: 'left',
                target: $body,
                visibleClass: 'navPanel-visible'
            });

        // Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
        if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
            $('#titleBar, #navPanel, #page-wrapper')
                .css('transition', 'none');

	});

})(jQuery);