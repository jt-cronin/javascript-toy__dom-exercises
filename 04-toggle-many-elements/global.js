window.addEventListener('load', function () {
	
	var button = document.getElementById('button')
	button.addEventListener('click', function(){
		var show = document.getElementsByClassName('toggle_me');

		for (var i = 0; i < show.length; i++) {
      if (show[i].style.display === "none") {
        show[i].style.display = "block";
      }
      else {
        show[i].style.display = "none";
      }
    }
	});
});