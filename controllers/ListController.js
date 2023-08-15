window.ListController = function($scope, $routeParams, $http){
    const apiClo = "http://localhost:3000/quanao";

    $scope.show = function(){
        $http.get(apiClo).then(function(response){
            if(response.status == 200){
                $scope.listClo = response.data
            }
        })
    }

    $scope.show()

    $scope.delete = function(deleteId){
        let confirm = window.confirm('Bạn có muốn xóa không?')

        if(confirm){
            $http.delete(`${apiClo}/${deleteId}`).then(function(response){
                window.location.href = "http://127.0.0.1:5500/index.html#!/list";
            })
        }
        
    }
}