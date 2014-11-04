angular.module("romanianChyrilicAndGreek", []);
var romanianChyrilicAndGreekModule = angular.module("romanianChyrilicAndGreek");
romanianChyrilicAndGreekModule.controller("MainCtrl",
    ["$scope", "transliterationSrv",
        function ($scope, transliterationSrv) {

            $scope.texts = {
                pageTitle: "Limba Română cu litere chirilice și grecești - Write romanian with cyrillic and greek letters",
                placeHolderRomanianLetters: "Textul scris cu litere românești...",
                placeHolderGreekLetters: "Textul scris cu litere grecești (γρεκεσχτι)...",
                placeHolderChyrilicLetters: "Textul scris cu litere chirilice (кирилике)..."
            };
            
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