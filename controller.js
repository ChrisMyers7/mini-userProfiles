angular.module('userProfiles').controller('MainController', function($scope, mainService){
    
    $scope.thisAppIsBroken = "This angular app is working";
   
    $scope.aquireUsers = function() {
        $scope.users = mainService.getUsers();
    }
    
    $scope.aquireUsers();
    
    $scope.toggle = mainService.toggleFavorite;
    
})