$(function () {

	var sub_nav = $('#sub-nav-sm-xs');

	var h1 = $('h1');
	var drop_list = sub_nav.find('.drop-down-list');
	var list_menu = sub_nav.find('.list-menu-links');
	var line = sub_nav.find('.horizontal-line');

	var btn_down = sub_nav.find('.btn-down');
	var btn_block_left = btn_down.find('.btn-block-left');
	var btn_block_right = btn_down.find('.btn-block-right');

	var elts = [h1, drop_list, list_menu, btn_block_left, btn_block_right, line];
	var elts_class = ['transform-color', 'visible', 'transform-color', 'rotate transform-color', 'rotate transform-color', 'transform'];

	var opened = false; /* Menu ouvert ou fermé */
	var scroll = $(window).scrollTop(); /* Distance parcouru au scroll depuis le haut de la fenêtre */
				                
	btn_down.on('click', function(e) {
		!opened ? openMenu() : closeMenu();
	});

	/* Fonction lors du redimensionnement de la fenêtre */
	$(window).resize(function(){
  		if (window.innerWidth >= 768) {
  			closeMenu();
  		}
	});

	/* Fonction lors du scroll de la fenêtre */
	$(window).scroll(function(){
		if (opened) {
			sleep(200);
			closeMenu();
		}
	});

	/* ================================================= */

	/*
	* Ouvre le menu déroulant
	*/
	function openMenu() {
		for (var i = 0 ; i < elts.length ; i++) {
			elts[i].addClass(elts_class[i]);
		}
		opened = true;
	}

	/*
	* Ferme le menu déroulant
	*/
	function closeMenu() {
		for (var i = 0 ; i < elts.length ; i++) {
			elts[i].removeClass(elts_class[i]);
		}
		opened = false;
	}

	/*
	* En pause
	*/
	function sleep(milliSeconds){
	    var startTime = new Date().getTime();
	    while (new Date().getTime() < startTime + milliSeconds);
	}
				                
})();

