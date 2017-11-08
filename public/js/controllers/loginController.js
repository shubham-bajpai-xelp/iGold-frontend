app.controller("loginControl", function(
  $scope,
  $location,
  userSignIn,
  dataFactory
) {
  $scope.userDetail = {};
  $scope.validate = function() {
    var formObj = {
      username: $scope.userDetail.username,
      password: $scope.userDetail.password
    };
    $scope.checkValid = userSignIn.validateLoginForm(formObj);
    if ($scope.checkValid) {
      var dt = {};
      dt.email = $scope.userDetail.username;
      dt.password = $scope.userDetail.password;
      var url = "http://192.168.2.154:3000/login";
      dataFactory.getPostData(url, dt).then(function(res) {

        res = res;
        // if (uname == 'admin' && pswrd == 'admin') {
        //     window.location.href = "bankview";
        //     //  $rootScope.loggedIn=true;
        //     //  $location.path('/bankview');
        // }
        // else if (uname == 'bajpai' && pswrd == 'bajpai') {
        //     window.location.href = "jewelview";
        // }
        // else {
        //     alert('wrong stuff');
        // }
      });
    }
  };
  $("input[type=text]").removeAttr("readonly");
  $("#pswrd").removeAttr("readonly");
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
});
