app.controller("jewellerControl", function(
  $scope,
  $http,
  $cookieStore,
  postAuctionForm,
  dataFactory,
  $q
) {
  $scope.openLogout = function(i) {
    $(i)
      .find("ul")
      .slideToggle("swing");
  };
  $scope.logout = function() {
    window.location.href = "/";
  };
  $scope.fetchUpCommingAuctions = function() {
    var dt = {};
    var url = "http://localhost:3000/getauction";
    dataFactory.getData(url, dt).then(function(result) {
        var response  = eval('('+result.data.body+')');
        console.log(response);
        if(result.data.status=='201'){
            $scope.auctionLister=response;
            console.log($scope.auctionLister);
        }
        else{
            alert('Something Went Wrong');
        }
      
    });
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
  $scope.openapply_popup = function() {
   $("#applypop").css("display", "block");
    $("#applypop").velocity(
      { opacity: [1, 0] },
      { delay: 0, duration: 300, ease: "swing" }
    );
    $(".appyp_popcnt").velocity(
      { translateY: [0, "100vh"], opacity: [1, 0] },
      { delay: 180, duration: 600, easing: [20, 6], display: "block" }
    );
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
