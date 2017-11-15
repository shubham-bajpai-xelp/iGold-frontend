app.controller("bankcontroller", function(
  $scope,
  dataFactory,
  $http,
  $cookies,
  $location,
  basicFunctionalities,
  postAuctionForm,
  $q
) {
  $scope.auctionLister = [];
  $scope.auctionClosed = "closed";
  $scope.auctionUpcoming = "upcoming";
  $scope.auctionLive = "live";
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
  $("#dltpop").velocity(
    { opacity: 0, display: "none" },
    { delay: 0, duration: 0 }
  );
  $(".trashPopwrp").velocity(
    { translateY: "100vh", opacity: 0 },
    { delay: 0, duration: 0, display: "none" }
  );
  $scope.openDelete_popup = function() {
    $("#dltpop").css("display", "block");
    $("#dltpop").velocity(
      { opacity: [1, 0] },
      { delay: 0, duration: 300, ease: "swing" }
    );
    $(".trashPopwrp").velocity(
      { translateY: [0, "100vh"], opacity: [1, 0] },
      { delay: 180, duration: 600, easing: [20, 6], display: "block" }
    );
  };
  $scope.closeDelete_popup = function() {
    $("#dltpop").fadeOut();
    setTimeout(function() {
      $(".trashPopwrp").velocity(
        { translateY: ["100vh", 0], opacity: [0, 1] },
        { delay: 0, duration: 200, ease: "swing", display: "none" }
      );
      $("#dltpop").velocity(
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
  $(window).scroll(function() {
    var dnone = $(".sub_header"),
      scroll = $(window).scrollTop();
    var sticky = $(".stckyHdr");
    if (scroll >= 30) {
      sticky.slideDown("200");
      dnone.addClass("dn");
    } else {
      sticky.slideUp("200");
      dnone.removeClass("dn");
    }
  });
  $scope.biddingLength = function(packetObject) {
    var size = 0,
      eachObject;
    for (eachObject in packetObject) {
      console.log(packetObject[eachObject]["bidding"].length);
      if (packetObject[eachObject]["bidding"].length !== 0) size++;
    }
    return size;
  };
  $scope.fetchUpCommingAuctions = function(auctionType) {
    var dt = {};
    dt.auctionType = auctionType;
    dt.jewellerId = $cookies.get("visitorId");
    var url = "http://localhost:3000/banker/getauction";
    dataFactory.putData(url, dt).then(function(result) {
      var response = JSON.parse(result.data.body);
      if (result.data.status == 201) {
        $scope.auctionLister = response;
        console.log($scope.auctionLister);
      } else {
        alert("Something Went Wrong");
      }
    });
  };
  $scope.formatInrAmount = function(ammount) {
    return basicFunctionalities.validateINRformat(ammount);
  };
  switch ($location.url()) {
    case "/bank_closedauction":
      $scope.fetchUpCommingAuctions("closed");
      break;
    case "/#%2F!":
    case "/bank_auction":
      $scope.fetchUpCommingAuctions("upcoming");
      break;
    case "/bank_liveAuction":
      $scope.fetchUpCommingAuctions("live");
      break;
    default:
      $scope.fetchUpCommingAuctions("upcoming");
      break;
  }
  $scope.updateAuctionStatus = function($event,auction_id){
    var dt = {};
    var url = "http://localhost:3000/banker/updateauction";
        dt.auctionId = auction_id;
        dt.status = 1;
        dt. bankId = $cookies.get('visitorId');
        dataFactory.postFormData(url,dt)
        .then(function(response){
            var result = response.data.body;
            if(response.data.status==201){
                $scope.changeStatus($event);
            }
            else{
                alert('error','Due to some issue we are not able to update the status of saved auction');
            }
        });
  };
  $scope.auctionEditMode=function(auctionId){
    var popupWindow = window.open('updateAuction');
        popupWindow.mySharedData = auctionId;
  }
  $scope.changeStatus = function(i) {
    var rplcCont = "";
    rplcCont += '<span class="itemCenter col100">';
    rplcCont += '<span class="statusPosted fmralewayB">posted</span>';
    rplcCont += "</span>";
    $(i)
      .parents(".data_wrapper")
      .find(".col10")
      .find(".chngstatus")
      .replaceWith(rplcCont);
      $(i).remove();
  };
});
