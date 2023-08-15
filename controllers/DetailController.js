window.DetailController = function ($scope, $routeParams, $http) {
    $scope.id = $routeParams.id
    const apiClo = "http://localhost:3000/quanao";

    $scope.Detail = function(detailId){
        $http.get(`${apiClo}/${$scope.id}`).then(function(response){
            if(response.status == 200){
                $scope.inputValue = response.data
            }
        })
    }

    $scope.Detail();

    
  
  };
  