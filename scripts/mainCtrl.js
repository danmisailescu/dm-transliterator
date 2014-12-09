angular.module("romanianChyrilicAndGreek", []);
var romanianChyrilicAndGreekModule = angular.module("romanianChyrilicAndGreek");
romanianChyrilicAndGreekModule.controller("MainCtrl",
    ["$scope", "transliterationSrv", "textsSrv",
        function ($scope, transliterationSrv, textsSrv) {

            $scope.texts = textsSrv.texts;
           
            $scope.romanianLettersText = "";
            $scope.chyrilicLettersText = "";
            $scope.greekLettersText = "";

            $scope.writeWithChyrilicAndGreekLettersFromRomanian = function () {
                $scope.chyrilicLettersText = transliterationSrv.writeWithChyrilicLettersFromRomanian($scope.romanianLettersText);
                $scope.greekLettersText = transliterationSrv.writeWithGreekLettersFromRomanian($scope.romanianLettersText);
            };

            $scope.writeWithRomanianAndGreekLettersFromChyrilic = function () {
                $scope.romanianLettersText = transliterationSrv.writeWithRomanianLettersFromChyrilic($scope.chyrilicLettersText);
                $scope.greekLettersText = transliterationSrv.writeWithGreekLettersFromRomanian($scope.romanianLettersText);
            };

            $scope.writeWithRomanianAndChyrilicLettersFromGreek = function () {
                $scope.romanianLettersText = transliterationSrv.writeWithRomanianLettersFromGreek($scope.greekLettersText);
                $scope.chyrilicLettersText = transliterationSrv.writeWithChyrilicLettersFromRomanian($scope.romanianLettersText);
            };

        }]);