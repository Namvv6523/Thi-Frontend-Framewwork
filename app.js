var app = angular.module('myApp', ['ngRoute'])

app.config(function($routeProvider){
    $routeProvider.when('/list',{
        templateUrl: 'views/list.html',
        controller: ListController
    })

    .when('/add',{
        templateUrl: 'views/add.html',
        controller: AddController
    })

    .when('/detail/:id',{
        templateUrl: 'views/detail.html',
        controller: DetailController
    })

    .when('/edit/:id',{
        templateUrl: 'views/edit.html',
        controller: EditController
    })
})