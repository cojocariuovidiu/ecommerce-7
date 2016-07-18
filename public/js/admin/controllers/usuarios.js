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

    // Remove usuario
    vm.removeUsuario = function(){

        $http({
            method: 'POST',
            url: '/api/remove-usuario',
            data: vm.usuario
        }).then(function (result) { 

            // Sucesso
            if( result.data.resp ){
                vm.getUser();
            }
        });
    }

    // Set usuario
    vm.setUsuario = function(usuario){
        // usuario do contexto
        vm.usuario = usuario;
    }

    // Vai para tela de formulario de usuario
    vm.goFormUsuario = function(usuario){
    	$state.go('usuario-form',{
            usuario: usuario
        });
    }

    // Inicializa a tela
    init();
}