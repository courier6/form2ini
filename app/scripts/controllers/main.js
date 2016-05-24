'use strict';

/**
 * @ngdoc function
 * @name form2iniApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the form2iniApp
 */
angular.module('form2iniApp')
  .controller('MainCtrl', ['$scope', function ($scope) 
  {      
  	$scope.formData = {};
  	$scope.file = {};

    // give a default filename and extension if none was typed in
    $scope.file.name = "form2";

    //TODO: update to INI
    $scope.file.extension = "ini";

    $scope.processForm = function()
    {
      var iniFileContent = $scope.object2ini($scope.formData);
      var form2ini = new Blob([iniFileContent], {type: "text/plain;charset=utf-8"});

      if($scope.file.name == undefined || $scope.file.name == ""){
            $scope.file.name = "form2";
      }

      saveAs(form2ini, $scope.file.name + '.' + $scope.file.extension);
    };

    $scope.object2ini = function(formData)
    {
      var result = "";

      for(var key in formData){
        var keyValuePair = key + "=" + formData[key];
        result += keyValuePair + "\n";
      }

      return result;  
    }
  }]);
