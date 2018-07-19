angular.module('scopeExample', [])
.controller('MyController', ['$scope', function($scope) {
  $scope.username = 'World';

  $scope.apply.forEach(function (watcher) {
    // ... error
  });

  $scope.sayHello = function () {
    $scope.greeting = 'Hello ' + $scope.username + '!';
  };

  /*eslint angular/no-private-call: 2*/

  // invalid
  $scope.$$watchers.forEach(function (watcher) {
    // ...
  }); // error: Using $$-prefixed Angular objects/methods are not recommended
}]);

app.controller('MyController', function () {
  // ...
}); // error: Avoid using a variable and instead use chaining with the getter syntax.