(function(){

	var app = angular.module('ecommerce', ['ui.router']);

	app.config(function($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise('/');

        $stateProvider
            .state('dashboard', {
                url: '/',
                templateUrl: '/views/admin/dashboard.html',
                controller: 'dashboardController',
                controllerAs: 'dashboard',
            })
            .state('usuarios', {
                url: '/usuarios',
                templateUrl: '/views/admin/usuarios.html',
                controller: 'usuariosController',
                controllerAs: 'usuarios',
            })
            .state('usuario-form', {
                url: '/usuario-form',
                templateUrl: '/views/admin/usuario-form.html',
                controller: 'usuarioFormController',
                controllerAs: 'usuarioForm',
            })
            .state('clientes', {
                url: '/clientes',
                templateUrl: '/views/admin/clientes.html',
                controller: 'clientesController',
                controllerAs: 'clientes',
            })
            .state('banners', {
                url: '/banners',
                templateUrl: '/views/admin/banners.html',
                controller: 'bannersController',
                controllerAs: 'banners',
            })
            .state('categorias', {
                url: '/categorias',
                templateUrl: '/views/admin/categorias.html',
                controller: 'categoriasController',
                controllerAs: 'categorias',
            })
            .state('produtos', {
                url: '/produtos',
                templateUrl: '/views/admin/produtos.html',
                controller: 'produtosController',
                controllerAs: 'produtos',
            });
	});

	app.controller('dashboardController', dashboardController);
	app.controller('bannersController', bannersController);
	app.controller('usuariosController', usuariosController);
    app.controller('usuarioFormController', usuarioFormController);
	app.controller('clientesController', clientesController);
	app.controller('categoriasController', categoriasController);
	app.controller('produtosController', produtosController);

})();