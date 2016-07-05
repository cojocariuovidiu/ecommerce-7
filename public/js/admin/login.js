$(function(){

	// prevnt form 	typping enter button
	$(window).keydown(function(e){
		if(e.keyCode == 13) {
			$("button").trigger("click");
		}
	});

	// Login
	$("button").click(function(e){
		e.preventDefault();

		if(validateLogin()){
			submitLogin();
		}
	});

	function submitLogin(){
		$("#login").submit();
	}

	// validate form
	function validateLogin(){
		var validate = true;

		// fazer o validate dos campos

		return validate;
	}
});