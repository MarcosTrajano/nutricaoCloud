angular.module('nutricaoCloud').config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
        $stateProvider.state('dashboard', {
            url:"/dashboard",
            templateUrl:"dashboard/dashboard.html"
        }).state('pacientes',{
            url: "/pacientes",
            templateUrl: "pacientes/pacientes.html"
        }).state('cadastroPacientes',{
            url: "/cadastro_pacientes",
            templateUrl: "pacientes/cadastro.html"
        }).state('consultaPacientes',{
            url: "/consulta_paciente",
            templateUrl: "consulta/consulta.html"
        }).state('anamnese',{
            url: "/consulta_paciente",
            templateUrl: "consulta/anamnese.html"
        }).state('dieta',{
            url: "/consulta_paciente",
            templateUrl: "consulta/formDieta.html"
        })

        $urlRouterProvider.otherwise('/dashboard')
    }
])