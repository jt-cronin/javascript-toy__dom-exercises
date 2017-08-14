window.addEventListener('load', function() {
	 var first = document.getElementById('first');
	 var second = document.getElementById('second');
	 var third = document.getElementById('third');


	 function check(inputed){
	 	typed = inputed.value.length;
	 	max = parseInt(inputed.getAttribute("maxlength"));
	 	if (typed === max);

	 	return true;
	 }

	first.addEventListener("keyup", function() {
	if (check(first)){
		second.focus();
	}
  	});

	second.addEventListener("keyup", function() {
	if (check(second)){
		third.focus();
	}
	});

	 
});