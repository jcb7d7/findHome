app.controller('homePageController', ['$scope' , '$http', '$location', function ($scope, $http, $location) {
    $scope.goToSignUpPage = function () {
        console.log("Button Clicked");
        //$location.path("/signup");
        $http.get('/signup').then(function (response) {
            $scope.message = response.data.title;
            //$location.path = '/signup';
        })
    };

    $scope.message = "Got to the home page!";

}]);