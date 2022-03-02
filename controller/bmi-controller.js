//creating a module calles bmiCalculator.
const bmiCalculator = angular.module('bmiCalculator', []);

//defining the controller to maintain all the functionalites.
bmiCalculator.controller('bmiController', ['$scope', function ($scope) {
    //function to calculate the bodymassindex of the user.
    $scope.calculateBmi = function () {
        //keeping ng-hide as true makes the form disapper from Ui when he moves to check the result.
        $scope.bmiResultUi = true;
        //formula to calculate the bodymassindex.
        $scope.bmiResult = (parseFloat(parseInt($scope.bmi.weight) / ((parseInt($scope.bmi.height) / 100) * (parseInt($scope.bmi.height) / 100)))).toFixed(2);
        //set certain conditions to give the feedback for the user.
        // if ($scope.bmiResult < 18.5) {
        //     $scope.bmiResultFeedback = 'Under Weight please eat more!!!'
        // } else if ($scope.bmiResult < 25) {
        //     $scope.bmiResultFeedback = 'Excellent, Maintain this!!'
        // } else if ($scope.bmiResult < 30) {
        //     $scope.bmiResultFeedback = 'Have to reduce weight eat less!!'
        // } else {
        //     $scope.bmiResultFeedback = 'OBESITY-DANGER!!!'
        // }

        switch ($scope.bmiResult) {
            case '< 18.5':
                $scope.bmiResultFeedback = 'Under Weight please eat more!!!'
                break;
            case '< 25':
                $scope.bmiResultFeedback = 'Excellent, Maintain this!!'
                break;
            case '< 30':
                $scope.bmiResultFeedback = 'Have to reduce weight eat less!!'
                break;
            default:
                $scope.bmiResultFeedback = 'OBESITY-DANGER!!!'
        }

        //at the end of calculating the bmi result calling the below function to display that data in the bargraph.
        $scope.bmiResultComparingGraph();
    }
    //function to represent bargraph representation of the user bmiresult and normal average bmi results. 
    $scope.bmiResultComparingGraph = function () {
        new Chart("resultBarGraph", {
            type: "bar",
            data: {
                labels: ["YourBmiResult", "UnderWeight", "NormalWeight", "OverWeight", "Obesity"],
                datasets: [{
                    backgroundColor: ["violet", "blue", "green", "orange", "red"],
                    data: [$scope.bmiResult, 18.5, 24.9, 29.9, 50]
                }]
            },
            options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: "Weight that has to be in!!"
                }
            }
        });
    }
}])

// const BMI_CONSTANT = [
//     {
//         label: 'Obesity',
//         backgroundColor: 'red',
//         value: 50,
//         feedback: 'OBESITY DANGER!!!'
//     },
//     {
//         label: 'Overweight',
//         backgroundColor: 'orange',
//         value: 29.9,
//         feedback: 'Have to reduce weight'
//     },
//     {
//         ...
//     },
//     {
//         ...
//     }
// ]