app.controller("loginControl", function(
  $scope,
  $location,
  $cookieStore,
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
      var url = "http://localhost:3000/login";
      dataFactory.getPostData(url, dt).then(function(res) {
        var status = res.data.status;
        if(status==200){
            var response = eval('('+res.data.body+')');
            console.log(response);
            if (response.userType == 0 && response.userId) {
                $cookieStore.put('visitorId',response.userId);
                $cookieStore.put('visitorToken',response.token);
                window.location.href = "bankview";
                //  $rootScope.loggedIn=true;
                //  $location.path('/bankview');
            }
            else if (response.userType == 1 && response.userId) {
                window.location.href = "jewelview";
            }
            else {
                alert('wrong stuff');
            }

        }
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
