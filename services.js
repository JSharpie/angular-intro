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
      var testing = function() {
        function toObject(arr) {
          var rv = {};
          for (var i = 0; i < arr.length; ++i)
            rv[i] = arr[i];
          return rv;
        }
        $http.get(url).then(function(res) {
          var grab = toObject(res.data);
        });
        // console.log(colors.color);
        return;
      };
      return {
        createColor: addColor,
        getColors: getColors,
        testing: testing
      };
    });
})();
