
var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/bank_liveauction.html',
            controller: 'live'
        })
        .when('/bank_closedauction', {
            templateUrl: 'views/bank_closedauction.html',
            controller: 'closed'
        })
        .when('/bank_auction', {
            templateUrl: 'views/bank_auction.html',
            controller: 'auction'
        });
});

app.controller('closed', function ($scope) {
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
    $scope.openDatatable = function (i) {
        if ($(i).hasClass('expandRotate')) {
            $(i).removeClass('expandRotate');
            $(i).parents('.data_wrapper').next('.dspnone').slideUp('swing');
        }
        else {
            $(i).addClass('expandRotate');
            $(i).parents('.data_wrapper').next('.dspnone').slideDown('swing');
        }
    };
    $('#dltpop').velocity({ opacity: 0, display: "none" }, { delay: 0, duration: 0 });
    $('.trashPopwrp').velocity({ translateY: "100vh", opacity: 0 }, { delay: 0, duration: 0, display: 'none' });
    $scope.openDelete_popup = function () {
        $("#dltpop").css("display", "block");
        $('#dltpop').velocity({ opacity: [1, 0] }, { delay: 0, duration: 300, ease: 'swing' });
        $(".trashPopwrp").velocity({ translateY: [0, '100vh'], opacity: [1, 0] }, { delay: 180, duration: 600, easing: [20, 6], display: 'block' });
    };
    $scope.closeDelete_popup = function () {
        $('#dltpop').fadeOut();
        setTimeout(function () {
            $(".trashPopwrp").velocity({ translateY: ['100vh', 0], opacity: [0, 1] }, { delay: 0, duration: 200, ease: 'swing', display: 'none' });
            $("#dltpop").velocity({ opacity: [0, 1] }, { duration: 200, delay: 0, ease: 'swing' });
        }, 400);
    };

});

app.controller('live', function ($scope) {
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
    $scope.openDatatable = function (i) {

        if ($(i).hasClass('expandRotate')) {
            $(i).removeClass('expandRotate');
            $(i).parents('.data_wrapper').next('.dspnone').slideUp('swing');
        }
        else {

            $(i).addClass('expandRotate');
            $(i).parents('.data_wrapper').next('.dspnone').slideDown('swing');
        }
    };
    $('#dltpop').velocity({ opacity: 0, display: "none" }, { delay: 0, duration: 0 });
    $('.trashPopwrp').velocity({ translateY: "100vh", opacity: 0 }, { delay: 0, duration: 0, display: 'none' });
    $scope.openDelete_popup = function () {
        $("#dltpop").css("display", "block");
        $('#dltpop').velocity({ opacity: [1, 0] }, { delay: 0, duration: 300, ease: 'swing' });
        $(".trashPopwrp").velocity({ translateY: [0, '100vh'], opacity: [1, 0] }, { delay: 180, duration: 600, easing: [20, 6], display: 'block' });
    }
    $scope.closeDelete_popup = function () {
        $('#dltpop').fadeOut();
        setTimeout(function () {
            $(".trashPopwrp").velocity({ translateY: ['100vh', 0], opacity: [0, 1] }, { delay: 0, duration: 200, ease: 'swing', display: 'none' });
            $("#dltpop").velocity({ opacity: [0, 1] }, { duration: 200, delay: 0, ease: 'swing' });
        }, 400);
    }
});
app.controller('auction', function ($scope) {

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
    $scope.openDatatable = function (i) {
        if ($(i).hasClass('expandRotate')) {
            $(i).removeClass('expandRotate');
            $(i).parents('.data_wrapper').next('.dspnone').slideUp('swing');
        }
        else {
            $(i).addClass('expandRotate');
            $(i).parents('.data_wrapper').next('.dspnone').slideDown('swing');
        }
    };
    $('#dltpop').velocity({ opacity: 0, display: "none" }, { delay: 0, duration: 0 });
    $('.trashPopwrp').velocity({ translateY: "100vh", opacity: 0 }, { delay: 0, duration: 0, display: 'none' });
    $scope.openDelete_popup = function () {
        $("#dltpop").css("display", "block");
        $('#dltpop').velocity({ opacity: [1, 0] }, { delay: 0, duration: 300, ease: 'swing' });
        $(".trashPopwrp").velocity({ translateY: [0, '100vh'], opacity: [1, 0] }, { delay: 180, duration: 600, easing: [20, 6], display: 'block' });
    };
    $scope.closeDelete_popup = function () {
        $('#dltpop').fadeOut();
        setTimeout(function () {
            $(".trashPopwrp").velocity({ translateY: ['100vh', 0], opacity: [0, 1] }, { delay: 0, duration: 200, ease: 'swing', display: 'none' });
            $("#dltpop").velocity({ opacity: [0, 1] }, { duration: 200, delay: 0, ease: 'swing' });
        }, 400);
    };
});
app.controller('lgn', function ($scope, $location, $rootScope) {
    $scope.submit = function () {
        var uname = $scope.username;
        var pswrd = $scope.password;
        if (uname == 'admin' && pswrd == 'admin') {
            $rootScope.loggedIn = true;
            $location.path('/bank_liveauction');
        }
        else if (uname == 'bajpai' && pswrd == 'bajpai') {
            $rootScope.loggedIn = true;
            $location.path('/jewelview');
            window.location.href = 'jewelview';
        }
        else {
            toaster.pop('error', "error", "text");
        }
    };
    $('input[type=text]').removeAttr('readonly');
    $('#pswrd').removeAttr('readonly');
    //                $('input[type=password]').removeAttr('readonly');
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





