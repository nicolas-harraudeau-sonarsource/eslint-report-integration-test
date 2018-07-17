angular.module('scopeExample', [])
.controller('MyController', ['$scope', function($scope) {
  $scope.username = 'World';

  $scope.apply.forEach(function (watcher) {
    // ... error
  });

  $scope.sayHello = function() {
    $scope.greeting = 'Hello ' + $scope.username + '!';
  };
}]);

app.controller('MyController', function () {
  // ...
}); // error: Avoid using a variable and instead use chaining with the getter syntax.