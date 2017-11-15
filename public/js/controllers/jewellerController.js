app.controller("jewellerControl", function(
  $scope,
  $http,
  $route,
  $cookies,
  $location,
  // $cookieStore,
  basicFunctionalities,
  postAuctionForm,
  dataFactory,
  $q
) {
  $scope.auctionLister = [];
  $scope.signedInJewellerId = "";
  $scope.appliedAuctionId = $cookies.get('visitorId');
  $scope.auctionClosed = "closed";
  $scope.auctionUpcoming = "upcoming";
  $scope.auctionLive = "live";
  $scope.openLogout = function(i) {
    $(i)
      .find("ul")
      .slideToggle("swing");
  };
  $scope.logout = function() {
    window.location.href = "/";
  };
  $scope.ifJewellerExist = function(myArray){
    return angular.forEach(myArray, function(value, key){
      if(value.jewellerId == $cookies.get('visitorId')){
        return true;
      }
    });
  };
  $scope.fetchUpCommingAuctions = function(auctionType) {
    var dt = {};
    dt.auctionType = auctionType;
    dt.jewellerId = $cookies.get("visitorId");
    var url = "http://localhost:3000/jeweller/getauction";
    dataFactory.putData(url, dt).then(function(result) {
      var response = JSON.parse(result.data.body);
      if(result.data.status == 201) {
          $scope.auctionLister = response;
          console.log($scope.auctionLister)
      } else {
        alert("Something Went Wrong");
      }
    });
  };
  $scope.formatInrAmount = function(ammount){
    return basicFunctionalities.validateINRformat(ammount);
  };
  switch($location.url()){
    case '/jewl_closedauction':
      $scope.fetchUpCommingAuctions('closed');
    break;
    case '/#%2F!':
    case '/jewl_auction':
      $scope.fetchUpCommingAuctions('upcoming');
    break;
    case '/jewl_liveauction':
      $scope.fetchUpCommingAuctions('live');
    break;
    default:
    $scope.fetchUpCommingAuctions('upcoming');
    break;
  }
  
  $("input").bind("focus", function() {
    $(this)
      .next("label")
      .addClass("labelActive");
  });
  $("input").bind("blur", function() {
    if ($(this).val() == "" || $(this).val() == 0) {
      $(this)
        .next("label")
        .removeClass("labelActive");
    } else {
      $(this)
        .next("label")
        .addClass("labelActive");
    }
  });
  $scope.openDatatable = function(i) {
    if ($(i).hasClass("expandRotate")) {
      $(i).removeClass("expandRotate");
      $(i)
        .parents(".data_wrapper")
        .next(".dspnone")
        .slideUp("swing");
    } else {
      $(i).addClass("expandRotate");
      $(i)
        .parents(".data_wrapper")
        .next(".dspnone")
        .slideDown("swing");
    }
  };
  $("#bpop").velocity(
    { opacity: 0, display: "none" },
    { delay: 0, duration: 0 }
  );
  $(".bidPopwrp").velocity(
    { translateY: "100vh", opacity: 0 },
    { delay: 0, duration: 0, display: "none" }
  );
  $("#rankpop").velocity(
    { opacity: 0, display: "none" },
    { delay: 0, duration: 0 }
  );
  $(".rankShitwrp").velocity(
    { translateY: "100vh", opacity: 0 },
    { delay: 0, duration: 0, display: "none" }
  );
  $scope.openBidding_popup = function() {
    $("#bpop").css("display", "block");
    $("#bpop").velocity(
      { opacity: [1, 0] },
      { delay: 0, duration: 300, ease: "swing" }
    );
    $(".bidPopwrp").velocity(
      { translateY: [0, "100vh"], opacity: [1, 0] },
      { delay: 180, duration: 600, easing: [20, 6], display: "block" }
    );
  };

  $scope.closeBidding_popup = function() {
    $("#bpop").fadeOut();
    setTimeout(function() {
      $(".bidPopwrp").velocity(
        { translateY: ["100vh", 0], opacity: [0, 1] },
        { delay: 0, duration: 200, ease: "swing", display: "none" }
      );
      $("#bpop").velocity(
        { opacity: [0, 1] },
        { duration: 200, delay: 0, ease: "swing" }
      );
    }, 400);
  };
  $scope.openRanking_popup = function() {
    $("#rankpop").css("display", "block");
    $("#rankpop").velocity(
      { opacity: [1, 0] },
      { delay: 0, duration: 300, ease: "swing" }
    );
    $(".rankShitwrp").velocity(
      { translateY: [0, "100vh"], opacity: [1, 0] },
      { delay: 180, duration: 600, easing: [20, 6], display: "block" }
    );
  };

  $scope.closeRanking_popup = function() {
    $("#rankpop").fadeOut();
    setTimeout(function() {
      $(".rankShitwrp").velocity(
        { translateY: ["100vh", 0], opacity: [0, 1] },
        { delay: 0, duration: 200, ease: "swing", display: "none" }
      );
      $("#rankpop").velocity(
        { opacity: [0, 1] },
        { duration: 200, delay: 0, ease: "swing" }
      );
    }, 400);
  };
  $scope.openLogout = function(i) {
    $(i)
      .find("ul")
      .slideToggle("swing");
  };
  $scope.logout = function() {
    window.location.href = "/";
  };
  $("input").bind("focus", function() {
    $(this)
      .next("label")
      .addClass("labelActive");
  });
  $("input").bind("blur", function() {
    if ($(this).val() == "" || $(this).val() == 0) {
      $(this)
        .next("label")
        .removeClass("labelActive");
    } else {
      $(this)
        .next("label")
        .addClass("labelActive");
    }
  });
  $scope.openDatatable = function(i) {
    if ($(i).hasClass("expandRotate")) {
      $(i).removeClass("expandRotate");
      $(i)
        .parents(".data_wrapper")
        .next(".dspnone")
        .slideUp("swing");
    } else {
      $(i).addClass("expandRotate");
      $(i)
        .parents(".data_wrapper")
        .next(".dspnone")
        .slideDown("swing");
    }
  };
  $("#applypop").velocity(
    { opacity: 0, display: "none" },
    { delay: 0, duration: 0 }
  );
  $(".appyp_popcnt").velocity(
    { translateY: "100vh", opacity: 0 },
    { delay: 0, duration: 0, display: "none" }
  );
  $scope.openapply_popup = function(auctionId) {
    $("#applypop").css("display", "block");
    $("#applypop").velocity(
      { opacity: [1, 0] },
      { delay: 0, duration: 300, ease: "swing" }
    );
    $(".appyp_popcnt").velocity(
      { translateY: [0, "100vh"], opacity: [1, 0] },
      { delay: 180, duration: 600, easing: [20, 6], display: "block" }
    );
    $scope.signedInJewellerId = $cookies.get('visitorId');
    $scope.appliedAuctionId = auctionId;
  };
  $scope.closeapply_popup = function() {
    $("#applypop").fadeOut();
    setTimeout(function() {
      $(".appyp_popcnt").velocity(
        { translateY: ["100vh", 0], opacity: [0, 1] },
        { delay: 0, duration: 200, ease: "swing", display: "none" }
      );
      $("#applypop").velocity(
        { opacity: [0, 1] },
        { duration: 200, delay: 0, ease: "swing" }
      );
      $(".apply_msgwrp").velocity(
        { translateY: [0, -20], opacity: [1, 0] },
        { duration: 300, easing: "easeInOut", display: "block" }
      );
      $(".emd_msgwrp").velocity(
        { translateY: [20, 0], opacity: [0, 1] },
        { duration: 300, easing: "easeInOut", display: "none" }
      );
    }, 400);
  };
  $scope.changeEmd = function() {
    $(".apply_msgwrp").velocity(
      { translateY: [-20, 0], opacity: [0, 1] },
      { duration: 300, easing: "easeInOut", display: "none" }
    );
    $(".emd_msgwrp").velocity(
      { translateY: [0, 20], opacity: [1, 0] },
      { duration: 300, easing: "easeInOut", display: "block" }
    );
    $scope.fillAuctionEmdDetails($scope.appliedAuctionId);
  };
  $scope.fillAuctionEmdDetails = function(){
    var dt = {};
    dt.auctionId = $scope.appliedAuctionId;
    var url = 'http://localhost:3000/getauction/'+dt.auctionId;
    dataFactory.getData(url,dt)
    .then(function(result) {
      var response = JSON.parse(result.data.body);
      $scope.auctionEMDAmount=response.auctionEMDAmount;
      $scope.auctionDateAndTime=response.auctionDateAndTime;
    });
  };
  $scope.convertToMilliseconds = function(datewithtime){
    var date = new Date(datewithtime);
    var milliseconds = date.getTime(); 
    return milliseconds;
  }
  $scope.applyForAuction = function(){
    var dt = {};
    var url = 'http://localhost:3000/jeweller/applyForAuction';
    dt.auctionId = $scope.appliedAuctionId;
    dt.jewellerId = $scope.signedInJewellerId;
    dataFactory.getPostData(url,dt)
    .then(function(result) {
        var response = JSON.parse(result.data.body);
        if(result.data.status==201){
          alert('EMD has been paid for particular auction id');
          $scope.closeapply_popup();


        }
    });
  };
  $scope.openLogout = function(i) {
    $(i)
      .find("ul")
      .slideToggle("swing");
  };
  $scope.logout = function() {
    window.location.href = "/";
  };
});
