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

  }).
  controller('MyCtrl1', function ($scope) {
    // write Ctrl here

  });






