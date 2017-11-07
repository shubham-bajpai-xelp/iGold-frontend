
      $(document).ready(function(){
               $('input[type=text]').removeAttr('readonly');
               $('#pswrd').removeAttr('readonly');
//                $('input[type=password]').removeAttr('readonly');
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
            });

