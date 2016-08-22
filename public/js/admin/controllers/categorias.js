var categoriasController = function($scope, $http, $stateParams){
	var vm = this;

	function init(){
		vm.categoria = {};
		vm.categorias = {};
		vm.getCategorias();
	}

	vm.getCategorias = function(){

    	$http({
            method: 'GET',
            url: '/api/categorias',
        }).then(function (result) {
        	vm.categorias = result.data;

        }, function(error){ });
	}

	vm.setCategoria = function(categoria){
		vm.categoria = categoria;
	}

	vm.removeCategoria = function(){

        $http({
            method: 'POST',
            url: '/api/remove-categoria',
            data: vm.categoria
        }).then(function (result) { 

            // Sucesso, atualiza as categorias
            if( result.data.resp ){
                vm.getCategorias();
            }
        });
	}

	vm.salvar = function(){

		// Valida formulario
		if(vm.form.$valid){

	    	$http({
	            method: 'POST',
	            url: '/api/adiciona-categoria',
	            data: vm.categoria
	        }).then(function (result) { 

	        	// Falha
	        	if(!result.data.resp){
	        		vm.sucesso = "";
	        		vm.erro = result.data.msg;
	        	}else{
	        		// Sucesso
	        		vm.erro = "";
	        		vm.sucesso = result.data.msg;

	        		// Atualiza as categorias
	        		vm.getCategorias();
	        	}
	        });
	    }
	}

	// Inicializa a tela
	init();
}