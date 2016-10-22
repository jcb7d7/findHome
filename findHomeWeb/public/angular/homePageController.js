app.controller('homePageController', ['$scope' , '$http', function ($scope, $http) {
    $scope.goToSignUpPage = function () {
        console.log("Button Clicked");
        $http.get('/signup');
    }
}]);