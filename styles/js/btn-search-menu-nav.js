$(document).ready(function () {
  var header = $('header');

  var container = header.find('.search-container');
  var btn_search = header.find('.btn-search');
  var btn_close = header.find('.btn-close');

  var opened = false;

  btn_search.on('click', function () {
    container.toggleClass('visible');
    opened = !opened;
  });

  btn_close.on('click', function () {
    closeSearch();
  });

  /* Fonction lors du redimensionnement de la fenêtre */
  $(window).resize(function () {
    if (opened) {
      closeSearch();
    }
  });

  /* Fonction lors du scroll de la fenêtre */
  $(window).scroll(function () {
    if (opened) {
      closeSearch();
    }
  });

  /* ====================================================== */

  /**
   * Ferme la saisie de recherche
   */
  function closeSearch() {
    container.removeClass('visible');
    opened = false;
  }
});
