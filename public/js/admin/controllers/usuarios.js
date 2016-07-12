var usuariosController = function($scope, $http, $stateParams, $state){
	var vm = this;

	function init(){

		vm.usuarios = {};
		vm.getUser();
	}

	// Retorna todos os usuarios admin
    vm.getUser = function(){

    	$http({
            method: 'GET',
            url: '/api/usuarios',
        }).then(function (result) {
        	vm.usuarios = result.data;

        }, function(error){ });
    };

    // Vai para tela de formulario de usuario
    vm.goFormUsuario = function(){
    	console.log('oi');
    	$state.go('usuario-form')
    }

    // Inicializa a tela
    init();
}