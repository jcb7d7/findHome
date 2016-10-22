app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: "partials/index.hbs",
            controller: "homePageController"
        })
        .when('/signup', {
            templateUrl: "partials/signup.hbs",
            controller: "signUpController"
        })
}]);