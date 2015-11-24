(function(){


  angular
    .module('colors')
    .controller('MainController', function ($scope) {
      $scope.msg = "this is a secret message";
    })
    .controller('ColorController', function ($scope, ColorService) {
      ColorService.getColors().success(function (colors) {
        $scope.colors = colors;
      });
      $scope.addColor = function(newColor) {
        console.log(newColor);
        ColorService.createColor(newColor);
      };
    });
})();