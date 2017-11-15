app.directive("file", function() {
  return {
    scope: {
      file: "="
    },
    link: function(scope, el, attrs) {
      el.bind("change", function(event) {
        var file = event.target.files[0];
        scope.file = file ? file : undefined;
        scope.$apply();
      });
    }
  };
});
app.controller("auctionControl", function(
  $scope,
  $http,
  postAuctionForm,
  $cookies,
  dataFactory,
  $q
) {
  $scope.pageName=page;
  $scope.auctionData = {};
  $scope.postAuctionDetails = function(id) {
    var formObj = {
      bankName: $scope.auctionData.bankName,
      bankBranch: $scope.auctionData.bankBranch,
      bankAddress: $scope.auctionData.bankAddress,
      bankCity: $scope.auctionData.bankCity,
      bankState: $scope.auctionData.bankState,
      bankPincode: $scope.auctionData.bankPincode,
      auctionDate: $scope.auctionData.auctionDate,
      auctionTime: $scope.auctionData.auctionTime,
      accountNumber: $scope.auctionData.accountNumber,
      auctionEMDAmount: $scope.auctionData.auctionEMDAmount,
      bankEMDLastDate: $scope.auctionData.bankEMDLastDate,
      auctionPacketFile: $scope.auctionData.auctionPacketFile
    };
    $scope.checkValid = postAuctionForm.validateAuctionForm(formObj);
    if ($scope.checkValid == true) {
      var url = "http://localhost:3000/postAuction";
      var dt = {};
      dt.auctionDate = $scope.auctionData.auctionDate;
      dt.auctionTime = $scope.auctionData.auctionTime;
      dt.auctionEMDAmount = $scope.auctionData.auctionEMDAmount;
      dt.auctionEMDLastDate = $scope.auctionData.bankEMDLastDate;
      dt.bankName = $scope.auctionData.bankName;
      dt.bankBranch = $scope.auctionData.bankBranch;
      dt.bankId = $cookies.get('visitorId');
      dt.bankClass= "axis_bank";
      dt.address=$scope.auctionData.bankAddress;
      dt.city= $scope.auctionData.bankCity;
      dt.auctionDate= $scope.auctionData.auctionDate;
      dt.auctionTime= $scope.auctionData.auctionTime;
      dt.auctionEMDAmount=$scope.auctionData.auctionEMDAmount;
      dt.EMDAccountNumber= $scope.auctionData.accountNumber;
      dt.description= "";
      dt.EMDAccountNo = $scope.auctionData.auctionNumber;
      dt.pinCode = $scope.auctionData.bankPincode;
      dt.state = $scope.auctionData.bankState;
      var fd = new FormData();
      fd.append("auctionDetails", angular.toJson(dt));
      fd.append("file", $scope.file);
      var config = {
        headers: { "Content-Type": undefined },
        transformRequest: angular.identity
      };
      dataFactory.postFormData(url, fd, config).then(function(resp) {
        var response = JSON.parse(resp.data.body);
        console.log(response);
      });
    }
  };
});
