app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: "partials/index.hbs",
            controller: "homePageController"
        })
        .when('/dashboard', {
            templateUrl: "partials/dashboard.hbs",
            controller: "signUpController"
        })
        .when('/signup', {
            templateUrl: "partials/signup.hbs"
        })
}]);