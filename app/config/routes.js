angular.module('nutricaoCloud').config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
        $stateProvider.state('dashboard', {
            url:"/dashboard",
            templateUrl:"dashboard/dashboard.html"
        }).state('cadastroPacientes',{
            url: "/pacientes",
            templateUrl: "pacientes/cadastro.html"
        })

        $urlRouterProvider.otherwise('/dashboard')
    }
])