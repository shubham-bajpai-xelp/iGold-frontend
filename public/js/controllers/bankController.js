var app=angular.module('myapp',['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/bank_liveauction.html',
        })
        .when('/bank_closedauction', {
            templateUrl: 'views/bank_closedauction.html',
        })
        .when('/bank_auction', {
            templateUrl: 'views/bank_auction.html',
        });
});
app.controller('bankcontroller', function ($scope) {
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
    $scope.openLogout = function (i) {
        $(i).find('ul').slideToggle('swing');
        }
      $scope.logout = function () {
         window.location.href = "/";
        }
        $(window).scroll(function () {
            var dnone = $('.sub_header'), scroll = $(window).scrollTop();
            var sticky=$('.stckyHdr');
            if (scroll >= 30) {
                sticky.slideDown('200')
                dnone.addClass('dn');
            }
            else {
                sticky.slideUp('200')
                dnone.removeClass('dn'); 
            }
        }); 
        $scope.liveauction =[
            {
                branch: "HSR Layout 1st Stage",
                city: "karnataka",
                auctionid: "97877634452423342",
                datetime: "19 Jul ,2017 | 4.00 pm",
                address: "vill:sukadal, post:bud bud,dist:burdwan ,state:westbengal,pin:713403",
                packet: "50 Packets",
                netweight: "236gm",
                noofbidders: "130 Bidders",
                value: [
                    {
                        loanacno: "99888723662552",
                        packetdetails: "2 Ear rings, 2 nose pins, 5 bangels, 5 Necklaces, 10 Pendants",
                        gross:"80gm",
                        net:"78gm",
                        baseprc:"1,00,000",
                        hgstbid:"1,50,000",
                        bidders:"12 Bidders",
                        caret:[
                        {
                          crt:"18c",
                          weight:"20gm"
                        },
                        {
                         crt:"16c",
                        weight:"20gm",  
                        },   
                        {
                         crt:"16c",
                           weight:"20gm",  
                        },
                        {
                             crt:"30c",
                              weight:"20gm",  
                        } ,
                        {
                             crt:"40c",
                             weight:"20gm",  
                       }  
                       ]
                    },
                    {
                        loanacno: "99888723662552",
                        packetdetails: "5 Ear rings, 4 nose pins, 5 bangels, 5 Necklaces, 10 Pendants",
                        gross:"80gm",
                        net:"78gm",
                        baseprc:"1,00,000",
                        hgstbid:"1,50,000",
                        bidders:"15 Bidders",
                        caret:[
                            {
                              crt:"18c",
                              weight:"20gm"
                            },
                            {
                             crt:"16c",
                            weight:"20gm",  
                            },   
                            {
                             crt:"16c",
                               weight:"20gm",  
                            },
                            {
                                 crt:"20c",
                                  weight:"20gm",  
                            } ,
                            {
                                 crt:"40c",
                                 weight:"20gm",  
                           }  
                           ]
                    }
                ]
            }, 
        ]; 
        
});