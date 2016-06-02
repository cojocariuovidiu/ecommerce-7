$(function(){

	// Ativa o menu selecionado
	$(".nav.nav-sidebar li").click(function(){
		$(".nav.nav-sidebar li").removeClass("active")
		$(this).addClass("active")
	});
});