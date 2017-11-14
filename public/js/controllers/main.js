var app = angular.module("serviceFactory", ["ngCookies", "ngRoute"]);
app.factory("dataFactory", [
  "$http",
  function ($http, dt, $q) {
    var dataFactory = {};
    dataFactory.postFormData = function (url, dt, headers) {
      return $http.post(url, dt, headers);
    };
    dataFactory.getPostData = function (url, dt) {
      return $http({
        url: url,
        // headers: { "x-access-token": common.getCookie("iGold") },
        method: "POST",
        data: dt
      });
    };
    dataFactory.getData = function (url) {
      return $http({
        url: url,
        // headers: { "x-access-token": common.getCookie("iGold") },
        method: "GET"
      });
    };
    return dataFactory;
  }
]);
app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "views/bank_auction.html",
    })
    .when("/jewl_liveauction", {
      templateUrl: "views/jewl_liveauction.html",
    })
    .when("/jewl_closedauction", {
      templateUrl: "views/jewl_closedauction.html",
    })
    .when('/bank_closedauction', {
      templateUrl: 'views/bank_closedauction.html',
    })
    .when('/bank_liveAuction', {
      templateUrl: 'views/bank_liveauction.html',
    })
    .when('/bankview', {
      templateUrl: 'views/bank_auction.html',
    })
    .when('/bank_auction', {
      templateUrl: 'views/bank_auction.html',
    });

});
app.factory("userSignIn", function () {
  return {
    validateLoginForm: function (obj) {
      var checkFormValidity = true;
      if (checkFormValidity == true && !obj.username) {
        alert("Please provide user emailid");
        checkFormValidity = false;
        return checkFormValidity;
      }
      if (checkFormValidity == true && !obj.password) {
        alert("Please provide user password");
        checkFormValidity = false;
        return checkFormValidity;
      }
      return checkFormValidity;
    }
  };
});
app.factory("postAuctionForm", function () {
  return {
    validateAuctionForm: function (obj) {
      var checkFormValidity = true;
      if (checkFormValidity == true && !obj.bankName) {
        common.msg({type:'error',text: 'Please provide bank name'});
        checkFormValidity = false;
        return checkFormValidity;
      }
      if (checkFormValidity == true && !obj.bankBranch) {
        common.msg({type:'error',text: 'Please provide bank branch name'});
        checkFormValidity = false;
        return checkFormValidity;
      }
      if (checkFormValidity == true && !obj.bankAddress) {
        common.msg({type:'error',text: 'Please provide bank branch address'});
        checkFormValidity = false;
        return checkFormValidity;
      }
      if (checkFormValidity == true && !obj.bankCity) {
        common.msg({type:'error',text: 'Please provide bank branch city'});
        checkFormValidity = false;
        return checkFormValidity;
      }
      if (checkFormValidity == true && !obj.bankState) {
        common.msg({type:'error',text: 'Please provide bank branch state'});
        checkFormValidity = false;
        return checkFormValidity;
      }
      if (checkFormValidity == true && !obj.bankPincode) {
        common.msg({type:'error',text: 'Please provide bank branch pincode'});
        checkFormValidity = false;
        return checkFormValidity;
      }
      if (checkFormValidity == true && !obj.auctionDate) {
        common.msg({type:'error',text: 'Please provide bank auction date'});
        checkFormValidity = false;
        return checkFormValidity;
      }
      if (checkFormValidity == true && !obj.auctionTime) {
        common.msg({type:'error',text: 'Please provide bank auction time'});
        checkFormValidity = false;
        return checkFormValidity;
      }
      if (checkFormValidity == true && !obj.accountNumber) {
        common.msg({type:'error',text: 'Please provide bank account number'});
        checkFormValidity = false;
        return checkFormValidity;
      }
      if (checkFormValidity == true && !obj.auctionEMDAmount) {
        common.msg({type:'error',text: 'Please provide bank EMD amount'});
        checkFormValidity = false;
        return checkFormValidity;
      }
      if (checkFormValidity == true && !obj.bankEMDLastDate) {
        common.msg({type:'error',text: 'Please provide bank EMD last date'});
        checkFormValidity = false;
        return checkFormValidity;
      }
      return checkFormValidity;
    }
  };
});
