app.controller("loginControl", function(
  $scope,
  $location,
  $cookieStore,
  userSignIn,
  dataFactory
) {
  $scope.userDetail = {};
  $scope.validate = function(e) {
    $('.dummy_btncnt').addClass('loaderNxt');
      $('.button').addClass('addPointer');
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
            var response = JSON.parse(res.data.body);
            if (response.userType == 1 && response.userId) {
                $cookieStore.put('visitorId',response.userId);
                $cookieStore.put('visitorToken',response.token);
                window.location.href = "bankview/bank_dashboard";
                common.msg({type:'success',text: 'login successfully'});
            }
            else if (response.userType == 2 && response.userId) {
                $cookieStore.put('visitorId',response.userId);
                $cookieStore.put('visitorToken',response.token);
<<<<<<< Updated upstream
                window.location.href = "jewelview";
                if(e.keyCode == 13){
                  window.location.href = "jewelview";
                }
=======
                window.location.href = "jewelview/jewl_dashboard";
>>>>>>> Stashed changes
                common.msg({type:'success',text: 'login successfully'});
            }
           
              else{
                  common.msg({type:'error',text: 'Please provide proper email id & password'});
                  $('.dummy_btncnt').removeClass('loaderNxt');
                  $('.button').removeClass('addPointer');
              }
        }
        else{
          common.msg({type:'error',text: 'Please provide proper email id & password'});
          $('.dummy_btncnt').removeClass('loaderNxt');
          $('.button').removeClass('addPointer');
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

