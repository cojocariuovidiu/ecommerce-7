// dashboard
var dashboardController = function($scope, $http, $stateParams){
	var vm = this;

	// Funcao de inicializacao
    var init = function(){

    	vm.users = [];

    	vm.getUser();
    }

    this.getUser = function(){

    	$http({
            method: 'GET',
            url: '/api/user',
        }).then(function (result) {
        	vm.users = result.data.user;

        }, function(error){ });
    };


    // Inicializa a tela
    init();
}