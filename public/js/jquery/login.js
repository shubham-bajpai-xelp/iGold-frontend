var app = angular.module('login', []);
app.controller('lgn', function ($scope, $location, $rootScope) {
    $scope.submit = function () {
        var uname = $scope.username;
        var pswrd = $scope.password;
        if (uname == 'admin' && pswrd == 'admin') {
            window.location.href = "bankview";
            //  $rootScope.loggedIn=true;
            //  $location.path('/bankview');  
        }
        else if (uname == 'bajpai' && pswrd == 'bajpai') {
            window.location.href = "jewelview";
        }
        else {
            alert('wrong stuff');
        }
    };
    $('input[type=text]').removeAttr('readonly');
    $('#pswrd').removeAttr('readonly');
    $('input').bind('focus', function () {
        $(this).next('label').addClass('labelActive');
    });
    $('input').bind('blur', function () {
        if ($(this).val() == '' || $(this).val() == 0) {
            $(this).next('label').removeClass('labelActive');
        }
        else {
            $(this).next('label').addClass('labelActive');
        }
    });

});