$(document).ready(function(){
      $('.timepicker').timepicker({
      onSelect:function (date){
        $('#vm').next('.label').addClass('labelActive');
      }
      });  
      $( ".datepicker" ).datepicker({
            onSelect: function (date) {
           if($(this).attr('id')=='tm'){
            $('#tm').next('.label').addClass('labelActive');
           }
           else if($(this).attr('id')=='lb'){
            $('#lb').next('.label').addClass('labelActive');    
           }
      }     
      });
});


