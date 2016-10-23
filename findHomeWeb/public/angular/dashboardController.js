app.controller('dashboardController', ['$scope', '$http', function ($scope, $http) {

    var config = {
        headers : {
            'Content-Type': 'application/json;'
        }
    };

    $scope.getData = function () {
        $http.get('/facilities', config).then(function (result) {
            $scope.results = result.data;
            console.log($scope.results);
        })
    }

}]);