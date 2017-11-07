/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 $(document).ready(function(){
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
            });
            
             function changeiTab(id) {
    switch (id) {
        case 'bdetails':
            $('#acdetails').addClass('dn');
            $('#bdetails').removeClass('dn');
            $('#bd').find('.onb_tabicncnt').addClass('icnBasicdetails_select');
            $('#bd').addClass('fmralewayB');
            $('#bd').find('.onb_tabicncnt').removeClass('icnBasicdetails');
            $('#ad').find('.onb_tabicncnt').removeClass('icnAccountdetails_select');
            $('#ad').removeClass('fmralewayB');
            $('#ad').find('.onb_tabicncnt').addClass('icnAccountdetails');
            break;
        case 'acdetails':
            $('#bdetails').addClass('dn');
            $('#acdetails').removeClass('dn'); 
            $('#bd').find('.onb_tabicncnt').removeClass('icnBasicdetails_select');
            $('#bd').removeClass('fmralewayB');
            $('#bd').find('.onb_tabicncnt').addClass('icnBasicdetails');
            $('#ad').find('.onb_tabicncnt').addClass('icnAccountdetails_select');
            $('#ad').addClass('fmralewayB');
            $('#ad').find('.onb_tabicncnt').removeClass('icnAccountdetails');
            break;  
    }

} 


