var usuarioFormController = function($scope, $http, $stateParams, AppServices){
	var vm = this;

	// Vai editar usuario
	if( $stateParams.usuario ){
		vm.usuario = $stateParams.usuario;
		vm.edit = true;
	}else{
		// Cria usuario do contexto
		vm.usuario = {}
	}

	// Salvar o formulario do usuario
	vm.salvar = function(){

		// Valida formulario
		if(vm.form.$valid){

	    	// Salva no banco
	    	if( $stateParams.usuario ){
	    		// Atualiza usuario
	    		salvar('edita-usuario');
	    	}else{
	    		// Adiciona novo usuario
	    		salvar('adiciona-usuario');
	    	}
	    }
	}

	function salvar( url ){

    	$http({
            method: 'POST',
            url: '/api/' + url,
            data: vm.usuario
        }).then(function (result) { 

        	// Falha
        	if(!result.data.resp){
        		vm.sucesso = "";
        		vm.erro = result.data.msg;
        	}else{
        		// Sucesso
        		vm.erro = "";
        		vm.sucesso = result.data.msg;
        	}
        });
	}

    // return page back
    vm.goBack = function(){
        AppServices.goBack();
    }
}