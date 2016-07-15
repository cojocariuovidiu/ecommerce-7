var usuarioFormController = function($scope, $http, $stateParams, AppServices){
	var vm = this;

	// Usuario do contexto
	vm.usuario = {}

	// Salvar o formulario do usuario
	vm.salvar = function(){

		// Valida formulario
		if(vm.form.$valid){
			vm.error = false;

			// Salva no banco
		}
		else{
			// Tem erros
			//$scope.errorForm = true;
		}
	}

    // return page back
    vm.goBack = function(){
        AppServices.goBack();
    }
}