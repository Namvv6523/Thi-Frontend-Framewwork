window.EditController = function ($scope, $routeParams, $http) {
  $scope.id = $routeParams.id;
  const apiClo = "http://localhost:3000/quanao";

  $scope.loai = {
    aophao: "Áo Phao",
    aogio: "Áo gió",
    aomua: "Áo mưa",
  };

  $http.get(`${apiClo}/${$scope.id}`).then(function (response) {
    if (response.status == 200) {
      $scope.inputValue = response.data;
    }
  });

  $scope.editPost = function () {
    let flag = true;

    if (!$scope.inputValue || !$scope.inputValue.id) {
      $scope.id = "Không được để trống!";
      flag = false;
    } else {
      $scope.id = "";
    }

    if (!$scope.inputValue || !$scope.inputValue.name) {
      $scope.name = "Không được để trống!";
      flag = false;
    } else {
      $scope.name = "";
    }

    if (!$scope.inputValue || !$scope.inputValue.price) {
      $scope.price = "Không được để trống!";
      flag = false;
    } else {
      $scope.price = "";
    }

    if (flag) {
      let confirm = window.confirm("Cập nhập thành công");

      let editPost = {
        id: $scope.inputValue.id,
        name: $scope.inputValue.name,
        loai: $scope.inputValue.loai,
        price: $scope.inputValue.price,
      };

      if (confirm) {
        $http.put(`${apiClo}/${$scope.id}`, editPost).then(function (response) {
          window.location.href = "http://127.0.0.1:5500/index.html#!/list";
        });
      }
    }
  };
};
