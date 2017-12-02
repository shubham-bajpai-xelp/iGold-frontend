app.directive("ngEnter", function() {
  return function($scope, $element, $attrs) {
    $element.bind("keyup keydown keypress", function($event) {
      if (event.which === 13) {
        $scope.$apply(function() {
          $scope.$eval(attrs.ngEnter, { event: event });
        });
        $event.preventDefault();
      }
    });
  };
});
app.directive("ngFocus", function($timeout) {
  return {
    link: function(scope, element, attrs) {
      scope.$watch(
        attrs.ngFocus,
        function(val) {
          if (angular.isDefined(val) && val) {
            $timeout(function() {
              element[0].focus();
            });
          }
        },
        true
      );
      element.bind("blur", function() {
        if (angular.isDefined(attrs.ngFocusLost)) {
          scope.$apply(attrs.ngFocusLost);
        }
      });
    }
  };
});

