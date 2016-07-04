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
		$.ajax({
			url: "/admin/login",
			type: "POST",
			data: $("form").serializeArray(),
			success: function(data){

				if(! data.status ){
					$(".alert").show();
				}
			}
		})
	}

	// validate form
	function validateLogin(){
		var validate = true;

		// fazer o validate dos campos

		return validate;
	}
});