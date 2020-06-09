$(document).ready(function () {
  var body = $('body');
  var content = $('#content');
  var footer = $('footer');

  var menu_nav = body.find('#menu-nav-sm-xs');
  var sub_nav = body.find('#sub-nav-sm-xs');
  var container = menu_nav.find('.drop-down-container');
  var list = menu_nav.find('.list-menu-links');

  var btn_nav = menu_nav.find('.btn-nav');
  var btn_block_top = btn_nav.find('.btn-block.top');
  var btn_block_middle = btn_nav.find('.btn-block.middle');
  var btn_block_bottom = btn_nav.find('.btn-block.bottom');

  var elts = [
    container,
    list,
    btn_block_top,
    btn_block_middle,
    btn_block_bottom,
    content,
    footer,
    sub_nav,
  ];
  var elts_class = [
    'transform-position',
    'transform-color',
    'rotate',
    'rotate',
    'rotate',
    'hide',
    'hide',
    'hide',
  ];

  var opened = false;

  btn_nav.on('click', function () {
    for (var i = 0; i < elts.length; i++) {
      elts[i].toggleClass(elts_class[i]);
    }
    opened = !opened;
  });

  /* Ferme le menu si on est plus sur mobile */
  $(window).resize(function () {
    if (opened && window.innerWidth >= 768) {
      for (var i = 0; i < elts.length; i++) {
        elts[i].removeClass(elts_class[i]);
      }
    }
  });
});
