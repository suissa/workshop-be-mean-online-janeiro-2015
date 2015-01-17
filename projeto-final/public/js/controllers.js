'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('AppCtrl', function ($scope, $http) {

    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });

  }).
  controller('MyCtrl1', function ($scope) {
    // write Ctrl here

  }).
  controller('MyCtrl2', function ($scope) {
    // write Ctrl here

  })
  .controller('BeersListController', function ($scope, $http) {

    $http({
      method: 'GET',
      url: '/api/beers'
    }).
    success(function (data, status, headers, config) {
      $scope.beers = data;
      console.log('SUCESSO', data);
    }).
    error(function (data, status, headers, config) {
      $scope.error = 'Error!';
      console.log('ERRO', data);
    });

  })
  .controller('BeersShowController', function ($scope, $http, $routeParams) {

    var url = '/api/beers/' + $routeParams.id
    $http({
      method: 'GET',
      url: url
    }).
    success(function (data, status, headers, config) {
      $scope.beer = data;
      console.log('SUCESSO', data);
    }).
    error(function (data, status, headers, config) {
      $scope.error = 'Error!';
      console.log('ERRO', data);
    });

  })
  .controller('BeersCreateController', function ($scope, $http) {


    $scope.save = function (beer) {
      var url = '/api/beers/'
        , dados = beer
        ;

      console.log('Dados: ', dados);

      $http({
        method: 'POST',
        url: url,
        data: dados
      }).
      success(function (data, status, headers, config) {
        $scope.beer = data;
        console.log('SUCESSO', data);
      }).
      error(function (data, status, headers, config) {
        $scope.error = 'Error!';
        console.log('ERRO', data);
      });

    }

  });








