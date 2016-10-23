app.controller('dashboardController', ['$scope', '$http', function ($scope, $http) {

    $scope.org;
    $scope.resourceName;
    $scope.description;
    $scope.qtyAvail;
    $scope.qtyTotal;

    var config = {
        headers : {
            'Content-Type': 'application/json;'
        }
    };

    // $scope.submitData = function () {
    //     var data = {
    //         resource:
    //     }
    //
    //     $http.post('/updateResources', function () {
    //
    //     })
    // };

    var getData = function () {
        $http.get('/facilities', config).then(function (result) {
            $scope.results = result.data;
            console.log($scope.results);
        })
    };

    getData();

}]);