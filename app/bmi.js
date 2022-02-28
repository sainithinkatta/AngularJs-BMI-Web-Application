const bmi = angular.module('bmiapp', []);
let flag = 0;

bmi.controller('bmicontroller', ['$scope', '$document', function ($scope, $document) {
    console.log("My Bmi App");

    $scope.addDetails = [];
    $scope.formsubmit = function () {
        $scope.hideform = true;
        $scope.addDetails.push({
            username: $scope.bmi.name,
            useremail: $scope.bmi.email,
            userheight: parseInt($scope.bmi.height),
            userweight: parseInt($scope.bmi.weight)
        });
        console.log($scope.addDetails[0].userheight)
        console.log($scope.addDetails[0].userweight)
        $scope.bmiresult();
    };
    $scope.BMICalculator = function () {
        const w = $scope.addDetails[0].userheight
        const h = $scope.addDetails[0].userweight
        console.log(h + " " + h / 100 + " " + w + " " + w / (h / 100))
        let bmiresult = parseFloat(w / ((h / 100) * (h / 100)))
        const result = bmiresult.toFixed(2);
        return result
    };
    $scope.bmiresult = function () {
        $scope.showresultDivision = true;
        $document[0].getElementById('resultDivision').style.display = "block"
        console.log("bmi called")
        $document[0].getElementById('givenName').innerHTML = $scope.addDetails[0].username
        console.log($document)
        $document[0].getElementById('givenHeight').innerHTML = $scope.addDetails[0].userheight
        $document[0].getElementById('givenWeight').innerHTML = $scope.addDetails[0].userweight
        $document[0].getElementById('bmiResult').innerHTML = this.BMICalculator();
        if (this.BMICalculator() < 18.5) {
            $document[0].getElementById('result').innerHTML = 'Under Weight please eat more!!!'
        }
        else if (this.BMICalculator() < 25) {
            $document[0].getElementById('result').innerHTML = 'Excellent, Maintain this!!'
        }
        else if (this.BMICalculator() < 30) {
            $document[0].getElementById('result').innerHTML = 'have to reduce weight eat less!!'
        }
        else {
            $document[0].getElementById('result').innerHTML = 'OBESITY DANGER!!!'
        }
        $scope.showBarGraph();
    };

    $scope.showBarGraph = function() {
        var xValues = ["BmiResult", "Underweight", "Normal weight", "Overweight", "Obesity"];
        var yValues = [this.BMICalculator(), 18.5, 24.9, 29.9, 50];
        var barColors = ["violet", "blue", "green", "orange", "red"];

        new Chart("resChart", {
            type: "bar",
            data: {
                labels: xValues,
                datasets: [{
                    backgroundColor: barColors,
                    data: yValues
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