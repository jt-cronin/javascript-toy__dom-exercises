window.addEventListener('load', function(){

	var input = document.getElementById('full_name');
	input.addEventListener('keyup', function(){
		var output = document.getElementById('greeting');
		output.innerHTML = ("Hello there " + input.value + "!");
	});
});