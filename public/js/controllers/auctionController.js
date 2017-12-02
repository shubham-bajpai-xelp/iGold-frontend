app.directive("file", function () {
  return {
    scope: {
      file: "="
    },
    link: function (scope, el, attrs) {
      el.bind("change", function (event) {
        var file = event.target.files[0];
        scope.file = file ? file : undefined;
        scope.$apply();
      });
    }
  };
});
app.controller("auctionControl", function (
  $scope,
  $http,
  postAuctionForm,
  $cookies,
  dataFactory,
  $q
) {
  $scope.pageName = page;
  $scope.auctionData = {};
  $scope.postAuctionDetails = function (id) {
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
      var url = "http://localhost:3000/banker/postAuction";
      var dt = {};
      var bankerId = $cookies.get("visitorId");
          bankerId = bankerId;
      dt.auctionDate = $scope.auctionData.auctionDate;
      dt.auctionTime = $scope.auctionData.auctionTime;
      dt.auctionEMDAmount = $scope.auctionData.auctionEMDAmount;
      dt.auctionEMDLastDate = $scope.auctionData.bankEMDLastDate;
      dt.bankName = $scope.auctionData.bankName;
      dt.bankBranch = $scope.auctionData.bankBranch;
      dt.bankClass = "axis_bank";
      dt.bankId = bankerId;
      dt.address = $scope.auctionData.bankAddress;
      dt.city = $scope.auctionData.bankCity;
      dt.auctionDate = $scope.auctionData.auctionDate;
      dt.auctionTime = $scope.auctionData.auctionTime;
      dt.auctionEMDAmount = $scope.auctionData.auctionEMDAmount;
      dt.EMDAccountNumber = $scope.auctionData.accountNumber;
      dt.description = "";
      dt.status = 5;
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
      console.log(fd);
      dataFactory.postFormData(url, fd, config).then(function (resp) {
        var response = JSON.parse(resp.data.body);
        console.log(response);
      });
      $('.button').addClass('addPointer loaderNxt');
    }
  };
});
app.directive("showNotifications", function () {
  return {
    restrict: "A",
    link: function ($scope, elem, attrs) {
      $(elem).click(function () {
        var tm = elem[0].innerHTML
        console.log(tm);
        $scope.auctionData.bankCity = tm;
        $(this).parent('ul').prev('.dropdown_arrow').prev('.col100').find('label').addClass('labelActive');
        $(this).parent('ul').slideUp('swing');
        $(this).parent('ul').prev('.dropdown_arrow').prev('.col100').find('input[type=text]').val($(this).text());
        $(this).parent('ul').prev('.dropdown_arrow').removeClass('rot180');
      });
    }
  }
});
app.directive("showState", function () {
  return {
    restrict: "A",
    link: function ($scope, elem, attrs) {
      $(elem).click(function () {
        var mk = elem[0].innerHTML
        console.log(mk);
        $scope.auctionData.bankState = mk;
        $(this).parent('ul').prev('.dropdown_arrow').prev('.col100').find('label').addClass('labelActive');
        $(this).parent('ul').slideUp('swing');
        $(this).parent('ul').prev('.dropdown_arrow').prev('.col100').find('input[type=text]').val($(this).text());
        $(this).parent('ul').prev('.dropdown_arrow').removeClass('rot180');
      });
    }
  }
});
app.directive("datepicker", function () {
  function link(scope, element, attrs, controller) {
    $(element).datepicker({
      onSelect: function (dt) {
        scope.$apply(function () {
          controller.$setViewValue(dt);
        });
        if ($(this).attr('id') == 'tm') {
          $('#tm').next('.label').addClass('labelActive');
        }
        else if ($(this).attr('id') == 'lb') {
          $('#lb').next('.label').addClass('labelActive');
        }
      },
      dateFormat: "dd/mm/yy"
    });
  } return { require: 'ngModel', link: link };
});
app.directive("timepicker", function () {
  function link(scope, element, attrs, controller) {
    $(element).timepicker({
      onSelect: function (dt) {
        scope.$apply(function () {
          controller.$setViewValue(dt);
        });
        $('#vm').next('.label').addClass('labelActive');
      },
    });
  } return { require: 'ngModel', link: link };
});
