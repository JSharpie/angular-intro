(function(){


  angular
    .module('colors')
    .controller('MainController', function ($scope) {
      $scope.msg = "this is a secret message";
    })
    .controller('ColorController', function ($scope, ColorService) {
      ColorService.getColors().success(function (colors) {
        console.log(colors);
        $scope.theseColors = colors;
        console.log($scope.theseColors);
      });
      $scope.addColor = function(newColor){
        console.log(newColor);
        ColorService.createColor(newColor);
      };
      $scope.remove = function(color){
        ColorService.remove(color);
      }
    });
})();
