var app = angular.module("serviceFactory", ["ui.router","timer","ngCookies"]);
app.factory("dataFactory", [
  "$http",
  function($http, dt, $q) {
    var dataFactory = {};
    dataFactory.postFormData = function(url, dt, headers) {
      return $http.post(url, dt, headers);
    };
    dataFactory.getPostData = function(url, dt) {
      return $http({
        url: url,
        method: "POST",
        data: dt
      });
    };
    dataFactory.getData = function(url, dt) {
      return $http({
        url: url,
        data: dt,
        method: "GET"
      });
    };
    dataFactory.putData = function(url, dt) {
      return $http({
        url: url,
        data: dt,
        method: "PUT"
      });
    };
    return dataFactory;
  }
]);

app.config(function($stateProvider, $urlRouterProvider,$locationProvider) {
  $locationProvider.html5Mode(true);
  // $urlRouterProvider
          // .when('/banker-dashboard', 'banker/banker-dashboard/')
          // .when('/jeweller-dashboard', 'jeweller/jeweller-upcoming-auction/')
          // .when('/jeweller/jeweller-upcoming-auction', 'login')
  $stateProvider
    .state("banker-dashboard", {
      url: '/banker-dashboard',
      templateUrl: "views/bank_auction.html",
	    title: 'Bank Dashboard'
    })
	.state("banker-upcoming-auctions", {
      url: '/banker-upcoming-auctions',
      templateUrl: "views/bank_auction.html",
	  title: 'Bank Upcoming Auction'
    })
    .state("banker-live-auctions", {
      url: '/banker-live-auctions',
      templateUrl: "views/bank_liveauction.html"
    })
    .state("banker-closed-auction", {
      url: '/banker-closed-auction',
      templateUrl: "views/bank_closedauction.html"
    })
    .state("jeweller-dashboard", {
          url: "/jeweller-dashboard",
          templateUrl: "views/jewl_auction.html",
    })
    .state("jeweller-live-auction", {
      url: '/jeweller-live-auction',
      templateUrl: "views/jewl_liveauction.html",
      title: 'Jeweller Live Auctions'
    })
    .state("jeweller-closed-auctions", {
      url: '/jeweller-closed-auctions',
      templateUrl: "views/jewl_closedauction.html",
      title: 'Jeweller Closed Auctions'
    })
    .state("jeweller-upcoming-auction", {
      url: "/jeweller-upcoming-auction",
      templateUrl: "views/jewl_auction.html",
    });
});
app.factory("basicFunctionalities", function() {
	var basicFunctionalities = {};
    basicFunctionalities.validateINRformat= function(nStr) {
      nStr += "";
      x = nStr.split(".");
      x1 = x[0];
      x2 = x.length > 1 ? "." + x[1] : "";
      var rgx = /(\d+)(\d{3})/;
      var z = 0;
      var len = String(x1).length;
      var num = parseInt(len / 2 - 1);
      while (rgx.test(x1)) {
        if (z > 0) {
          x1 = x1.replace(rgx, "$1" + "," + "$2");
        } else {
          x1 = x1.replace(rgx, "$1" + "," + "$2");
          rgx = /(\d+)(\d{2})/;
        }
        z++;
        num--;
        if (num == 0) {
          break;
        }
      }
      return x1 + x2;
    };
	basicFunctionalities.validJewellerBiddingValue= function(biddingAmount){
		var checkTrue = true;
			biddingAmount = parseFloat(biddingAmount);
		if(checkTrue == true && (biddingAmount < 100 || biddingAmount == "" || biddingAmount == "0" )){
			check = false;
			common.msg({ type: "error", text: 'Bidding amount can not be less than 100 rupees'});
			return false;
		}
		if(checkTrue == true){
			return true;
		}
	}
	return basicFunctionalities;
});
app.factory("userSignIn", function() {
  return {
    validateLoginForm: function(obj) {
      var checkFormValidity = true;
      if (checkFormValidity == true && !obj.username) {
        common.msg({ type: "error", text: "Please provide user emailid" });
        checkFormValidity = false;
        $('.dummy_btncnt').removeClass('loaderNxt');
        $('.button').removeClass('addPointer');
        return checkFormValidity;
      }
      if (checkFormValidity == true && !obj.password) {
        common.msg({ type: "error", text: "Please provide user password" });
        checkFormValidity = false;
        $('.dummy_btncnt').removeClass('loaderNxt');
        $('.button').removeClass('addPointer');
        return checkFormValidity;
      }
      return checkFormValidity;
    }
  };
});
app.factory("postAuctionForm", function() {
  return {
    validateAuctionForm: function(obj) {
      var checkFormValidity = true;
      if (checkFormValidity == true && !obj.bankName) {
        common.msg({ type: "error", text: "Please provide bank name" });
        checkFormValidity = false;
        return checkFormValidity;
        $('.button').removeClass('addPointer loaderNxt');
      }
      if (checkFormValidity == true && !obj.bankBranch) {
        common.msg({ type: "error", text: "Please provide bank branch name" });
        checkFormValidity = false;
        $('.button').removeClass('addPointer loaderNxt');
        return checkFormValidity;
      }
      if (checkFormValidity == true && !obj.bankAddress) {
        common.msg({
          type: "error",
          text: "Please provide bank branch address"
        });
        $('.button').removeClass('addPointer loaderNxt');
        checkFormValidity = false;
        return checkFormValidity;
      }
      if (checkFormValidity == true && !obj.bankCity) {
        common.msg({ type: "error", text: "Please provide bank branch city" });
        checkFormValidity = false;
        $('.button').removeClass('addPointer loaderNxt');
        return checkFormValidity;
      }
      if (checkFormValidity == true && !obj.bankState) {
        common.msg({ type: "error", text: "Please provide bank branch state" });
        checkFormValidity = false;
        $('.button').removeClass('addPointer loaderNxt');
        return checkFormValidity;
      }
      if (checkFormValidity == true && !obj.bankPincode) {
        common.msg({
          type: "error",
          text: "Please provide bank branch pincode"
        });
        checkFormValidity = false;
        $('.button').removeClass('addPointer loaderNxt');
        return checkFormValidity;
      }
      if (checkFormValidity == true && !obj.auctionDate) {
        common.msg({ type: "error", text: "Please provide bank auction date" });
        checkFormValidity = false;
        $('.button').removeClass('addPointer loaderNxt');
        return checkFormValidity;
      }
      if (checkFormValidity == true && !obj.auctionTime) {
        common.msg({ type: "error", text: "Please provide bank auction time" });
        checkFormValidity = false;
        $('.button').removeClass('addPointer loaderNxt');
        return checkFormValidity;
      }
      if (checkFormValidity == true && !obj.accountNumber) {
        common.msg({
          type: "error",
          text: "Please provide bank account number"
        });
        checkFormValidity = false;
        $('.button').removeClass('addPointer loaderNxt');
        return checkFormValidity;
      }
      if (checkFormValidity == true && !obj.auctionEMDAmount) {
        common.msg({ type: "error", text: "Please provide bank EMD amount" });
        checkFormValidity = false;
        $('.button').removeClass('addPointer loaderNxt');
        return checkFormValidity;
      }
      if (checkFormValidity == true && !obj.bankEMDLastDate) {
        common.msg({
          type: "error",
          text: "Please provide bank EMD last date"
        });
        $('.button').removeClass('addPointer loaderNxt');
        checkFormValidity = false;
        return checkFormValidity;
      }
      return checkFormValidity;
    }
  };
});
app.directive("stopwatch", function() {
  return {
    scope: {},
    link: function(scope, elem, attr, ctrl) {
      var parentElmn = ctrl.elem(attr.stopwatch);
    },
    template: '<div ng-init="start()">{{time}}</div>',
    controller: function($scope, $interval, $element) {
      $scope.counter = 0;
      this.elem = function(data) {
        $scope.start(data);
      };
      $scope.start = function(data) {
        if(data){
          $scope.runClock = $interval(function(data) {
          $scope.time = moment()
            .hour(0)
            .minute(0)
            .second($scope.counter++)
            .format("HH : mm : ss");
        }, 1000);
        }
      };
    }
  };
});
app.service('getMomentData', function() {
  var pending = [];
  this.get = function(duration,interval) {
      duration = moment.duration(duration - interval, 'milliseconds');
  return duration.hours() + ":" + duration.minutes() + ":" + duration.seconds();
  };
});
