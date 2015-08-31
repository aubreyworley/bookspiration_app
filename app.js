angular.module('bookspiration', [])

  .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.books = [];

    $scope.searchCategories = function () {
      console.log($scope.categories);
      var url = 'https://www.googleapis.com/books/v1/volumes?q=/' + $scope.categories + '&key=AIzaSyBaSFFH24qPxVfKqN1ln_umX33Yfk9CA-g&callback=JSON_CALLBACK'; 
      // https://www.googleapis.com/books/v1/volumes?q=categories&key=AIzaSyBaSFFH24qPxVfKqN1ln_umX33Yfk9CA-g
      // var viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
      $http.jsonp(url)
        .then(function (response) {
          console.log(response.data.items);
          $scope.categories = '';
          $scope.books = response.data.items;
        }); 
    }; 
  }]);