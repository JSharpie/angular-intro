(function () {
  "use strict";
  angular
    .module('colors')
    .factory('ColorService', function($http){
      var url = 'http://tiny-tiny.herokuapp.com/collections/colors';
      var addColor = function newColor(){
        $http.post(url, addColor).then(function(res){
          console.log(res);
        });
      };
      var getColors = function(){
        return $http.get(url);
      };
      return{
        createColor: addColor,
        getColors: getColors
      };
    });
})();
