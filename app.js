(function(){
    'use strict';

    angular.module('MsgApp', [])
    .controller('MsgController', MsgController);

    MsgController.$inject = ['$scope'];

    function MsgController($scope){
        $scope.name = 'Kate';
        $scope.stateOfBeing = 'hungry';

        $scope.sayMessage = function(){
            return 'Kate likes to eat healthy snacks at night!';
        };

        $scope.feedYaakov = function(){
            $scope.stateOfBeing = 'fed';
        };
    }
})();