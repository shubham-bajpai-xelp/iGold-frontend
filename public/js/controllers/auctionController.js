app.controller("auctionControl", function(
  $scope,
  $http,
  postAuctionForm,
  dataFactory,
  $q
) {
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
      auctionNumber: $scope.auctionData.auctionNumber,
      auctionEMDAmount: $scope.auctionData.auctionEMDAmount,
      bankEMDLastDate: $scope.auctionData.bankEMDLastDate,
      auctionPacketFile: $scope.auctionData.auctionPacketFile
    };
    $scope.checkValid = postAuctionForm.validateAuctionForm(formObj);
    if ($scope.checkValid == true) {
      var url = "/auction/postAuction";
      var dt = {};
      dt.auctionDate = $scope.auctionData.auctionDate;
      dt.auctionTime = $scope.auctionData.auctionTime;
      dt.auctionEMDAmount = 25000;
      dt.auctionEMDLastDate = "23-10-2017";
      dt.bankId = $scope.auctionData.bankEMDLastDate;
      dt.EMDAccountNo = $scope.auctionData.auctionEMDAmount;
      dt.pinCode = $scope.auctionData.bankPincode;
      dt.state = $scope.auctionData.bankState;
      dt.user_id = $scope.user_id;
      dt.user_name = $scope.userEditData.user_name;
      dt.mobile = $scope.userEditData.mobile;
      dt.collectionType = id;
      dataFactory.getPostData(url, dt).then(function(res) {
        var resStatus = res.status;
        if(resStatus=='200'){

        }
      });
    }
  };
});
