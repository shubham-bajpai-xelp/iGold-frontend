                $(document).ready(function(){
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
            $(document).on('click','.drpdwn',function(){
                $('.dropDown ul').each(function(){
                    $(this).slideUp('swing');
                    $(this).prev('.dropdown_arrow').removeClass('rot180');
                });
                $(this).parent('.col100').next('.dropdown_arrow').addClass('rot180');
                $(this).parent('.col100').next('.dropdown_arrow').next('ul').slideDown('swing');
            });
           $(document).click(function (event) {
       if (!$(event.target).closest('.dropDown').length)
       {
           if ($('.dropDown').find('ul').is(":visible"))
           {
               $('.dropDown').find('.dropdown_arrow').removeClass('rot180');
               $('.dropDown').find('ul').slideUp('swing');
           }
       }
   });
   
   $(document).on('click','.enterVal',function(){
       $(this).parent('ul').prev('.dropdown_arrow').prev('.col100').find('label').addClass('labelActive');
       $(this).parent('ul').slideUp('swing');
       $(this).parent('ul').prev('.dropdown_arrow').prev('.col100').find('input[type=text]').val($(this).text());
       $(this).parent('ul').prev('.dropdown_arrow').removeClass('rot180');
   });


