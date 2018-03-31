(function () {

	var buttons = document.querySelectorAll("footer .col .drop-down-btn"),
		containers = document.querySelectorAll("footer .col .drop-down-list");

	for(i = 0 ; i < containers.length ; i++){
  		(function(arg1) {
    		buttons[i].addEventListener("click", function() {
     			containers[arg1].classList.toggle("visible");
    		}, false);
  		})(i);
	}

})();
