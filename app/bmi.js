const bmi = angular.module('bmiapp', []);
let flag = 0;

bmi.controller('bmicontroller', ['$scope', function ($scope) {
    console.log("My Bmi App");


    $scope.formsubmit = function () {
        // $scope.setErrorFor = function (input, message) {
        //     const formControl = input.parentElement;
        //     const small = formControl.querySelector('small');
        //     formControl.className = 'form-control error';
        //     small.innerText = message;
        // }
        // $scope.setSuccessFor = function (input, message) {
        //     const formControl = input.parentElement;
        //     const small = formControl.querySelector('small');
        //     formControl.className = 'form-control error';
        //     small.innerText = message;
        // };
        $scope.hideform = true;
        $scope.addDetails.push({
            username: $scope.bmi.name,
            useremail: $scope.bmi.email,
            userheight: parseInt($scope.bmi.height),
            userweight: parseInt($scope.bmi.weight)
        });
        $scope.bmi.name = "",
            $scope.bmi.email = "",
            $scope.bmi.height = "",
            $scope.bmi.weight = ""

    };
    $scope.addDetails = [{
        username: "",
        useremail: "",
        userheight: "",
        userweight: ""
    }];
}])