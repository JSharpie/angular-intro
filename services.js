(function() {
  "use strict";
  angular
    .module('colors')
    .factory('ColorService', function($http) {
      var url = 'http://tiny-tiny.herokuapp.com/collections/colors';
      var addColor = function(newColor) {
        $http.post(url, newColor).then(function(res) {
          console.log(res);
        });
      };
      var getColors = function() {
        console.log($http.get(url));
        return $http.get(url);
      };
      var remove = function(color){
        console.log(color);
        $http.delete(url+'/'+color._id);
      };
      return {
        createColor: addColor,
        getColors: getColors,
        remove: remove
      };
    });
})();
