var app = angular.module("serviceFactory", ['ngCookies']);
app.factory("dataFactory", [
  "$http",
  function($http, dt, $q) {
    var dataFactory = {};
    dataFactory.getPostData = function(url, dt) {
      return $http({
        url: url,
        // headers: { "x-access-token": common.getCookie("iGold") },
        method: "POST",
        data: dt
      });
    };
    dataFactory.getData = function(url) {
      return $http({
        url: url,
        // headers: { "x-access-token": common.getCookie("iGold") },
        method: "GET"
      });
    };
    return dataFactory;
  }
]);
app.factory("userSignIn", function() {
  return {
    validateLoginForm: function(obj) {
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
app.factory("postAuctionForm", function() {
  return {
    validateAuctionForm: function(obj) {
      var checkFormValidity = true;
      if (checkFormValidity == true && !obj.bankName) {
        //   common.toast(0, common.getMsg(parseInt(4)));
        alert("Please provide bank name");
        checkFormValidity = false;
        return checkFormValidity;
      }
      if (checkFormValidity == true && !obj.bankBranch) {
        //   common.toast(0, common.getMsg(parseInt(4)));
        alert("Please provide bank branch name");
        checkFormValidity = false;
        return checkFormValidity;
      }
      if (checkFormValidity == true && !obj.bankAddress) {
        //   common.toast(0, common.getMsg(parseInt(4)));
        alert("Please provide bank branch address");
        checkFormValidity = false;
        return checkFormValidity;
      }
      if (checkFormValidity == true && !obj.bankCity) {
        //   common.toast(0, common.getMsg(parseInt(4)));
        alert("Please provide bank branch city");
        checkFormValidity = false;
        return checkFormValidity;
      }
      if (checkFormValidity == true && !obj.bankState) {
        //   common.toast(0, common.getMsg(parseInt(4)));
        alert("Please provide bank branch state");
        checkFormValidity = false;
        return checkFormValidity;
      }
      if (checkFormValidity == true && !obj.bankPincode) {
        //   common.toast(0, common.getMsg(parseInt(4)));
        alert("Please provide bank branch pincode");
        checkFormValidity = false;
        return checkFormValidity;
      }
      if (checkFormValidity == true && !obj.auctionDate) {
        //   common.toast(0, common.getMsg(parseInt(4)));
        alert("Please provide bank auction date");
        checkFormValidity = false;
        return checkFormValidity;
      }
      if (checkFormValidity == true && !obj.auctionTime) {
        //   common.toast(0, common.getMsg(parseInt(4)));
        alert("Please provide bank auction time");
        checkFormValidity = false;
        return checkFormValidity;
      }
      if (checkFormValidity == true && !obj.auctionNumber) {
        //   common.toast(0, common.getMsg(parseInt(4)));
        alert("Please provide bank account number");
        checkFormValidity = false;
        return checkFormValidity;
      }
      if (checkFormValidity == true && !obj.auctionEMDAmount) {
        //   common.toast(0, common.getMsg(parseInt(4)));
        alert("Please provide bank EMD amount");
        checkFormValidity = false;
        return checkFormValidity;
      }
      if (checkFormValidity == true && !obj.bankEMDLastDate) {
        //   common.toast(0, common.getMsg(parseInt(4)));
        alert("Please provide bank EMD last date");
        checkFormValidity = false;
        return checkFormValidity;
      }
      if (checkFormValidity == true && !obj.auctionPacketFile) {
        //   common.toast(0, common.getMsg(parseInt(4)));
        alert("Please provide bank packet file");
        checkFormValidity = false;
        return checkFormValidity;
      }
      return checkFormValidity;
    }
  };
});
