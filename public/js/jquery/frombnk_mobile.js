var app=angular.module('myapp',[]);
app.controller('mobileonb',['$scope',function($scope){
        
   $('input[type=text]').removeAttr('readonly');
            $('input').bind('focus',function(){
              $(this).next('label').addClass('labelActive');  
            });
            $('input').bind('blur',function(){
                if($(this).val()=='' || $(this).val()==0){
                    $(this).next('label').removeClass('labelActive');
                }
                else{
                  $(this).next('label').addClass('labelActive');  
                }
            });
            $(document).on('click','input[type=text]',function(){
         $(".mobiledataCnt").animate({ scrollTop: $(this).offset().top + $(this).closest('.mobiledataCnt').scrollTop() - 120}, 600);
       });      
   $scope.tab = 1;
    $scope.setTab = function(newTab){
      $scope.tab = newTab;
    };
    $scope.isSet = function(tabNum){
      return $scope.tab === tabNum;
    }; 
}]);


