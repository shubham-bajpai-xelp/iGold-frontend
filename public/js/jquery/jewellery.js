
 $(document).on('click','.expandIcon',function(){
                if($(this).hasClass('expandRotate')){
                    $(this).removeClass('expandRotate');
                    $(this).parents('.data_wrapper').next('.dspnone').slideUp('swing');
                }
                else{
                    $(this).addClass('expandRotate');
                    $(this).parents('.data_wrapper').next('.dspnone').slideDown('swing');
                }
            });
            function changeiTab(id) {
    switch (id) {
        case 'closed_jewl':
            $('#live_jewl,#srch_livejwl,#auc_jewl,#srch_aucjwl').addClass('dn');
            $('#closed_jewl,#srch_closejwl').removeClass('dn');
            $('#clsdAuc').addClass('icn_closedauctionSelect');
            $('#clsdAuc').removeClass('icn_closedauction');
            $('#clsdAuc').addClass('clrOrng');
             $('#liveAuc').removeClass('icn_liveauctionSelect');
            $('#liveAuc').addClass('icn_liveauction');
            $('#liveAuc').removeClass('clrOrng');
             $('#auc').removeClass('clrOrng');
             $('#auc').removeClass('icn_auctionSelect');
             $('#auc').addClass('icn_bidauction');
            break;
        case 'live_jewl':
             $('#closed_jewl,#srch_closejwl,#auc_jewl,#srch_aucjwl').addClass('dn');
             $('#live_jewl,#srch_livejwl').removeClass('dn');
             $('#clsdAuc').removeClass('icn_closedauctionSelect');
             $('#clsdAuc').addClass('icn_closedauction');
             $('#clsdAuc').removeClass('clrOrng');
             $('#liveAuc').addClass('icn_liveauctionSelect');
            $('#liveAuc').removeClass('icn_liveauction');
            $('#liveAuc').addClass('clrOrng');
             $('#auc').removeClass('clrOrng');
             $('#auc').removeClass('icn_auctionSelect');
             $('#auc').addClass('icn_bidauction');
            break;
        case 'auc_jewl':
             $('#closed_jewl,#srch_closejwl,#live_jewl,#srch_livejwl').addClass('dn');
             $('#srch_aucjwl,#auc_jewl').removeClass('dn');
             $('#auc').addClass('clrOrng');
             $('#auc').addClass('icn_auctionSelect');
             $('#auc').removeClass('icn_bidauction');
             $('#liveAuc').addClass('icn_liveauction');
             $('#liveAuc').removeClass('clrOrng');
             $('#liveAuc').removeClass('icn_liveauctionSelect');
              $('#clsdAuc').removeClass('clrOrng');
               $('#clsdAuc').removeClass('icn_closedauctionSelect');
               $('#clsdAuc').addClass('icn_closedauction');
            break;   
    }

}


 $('#bpop').velocity({opacity: 0,display:"none"}, {delay: 0, duration: 0});
  $('.bidPopwrp').velocity({translateY:"100vh",opacity:0}, {delay: 0, duration: 0,display:'none'});
  $('#rankpop').velocity({opacity: 0,display:"none"}, {delay: 0, duration: 0});
  $('.rankShitwrp').velocity({translateY:"100vh",opacity:0}, {delay: 0, duration: 0,display:'none'});
          function openBidding_popup(){
         $("#bpop").css("display","block");    
         $('#bpop').velocity({opacity:[1,0]}, {delay: 0, duration: 300, ease: 'swing'});
         $(".bidPopwrp").velocity({translateY: [0,  '100vh'],opacity:[1,0]}, {delay: 180, duration: 600, easing: [20, 6],display: 'block'});
        }
        
         function closeBidding_popup(){
         $('#bpop').fadeOut();
        setTimeout(function() {
        $(".bidPopwrp").velocity({translateY: ['100vh',  0],opacity:[0,1]}, {delay: 0,duration: 200, ease: 'swing',display:'none'});
        $("#bpop").velocity({opacity:[0,1]}, {duration: 200, delay: 0, ease: 'swing'});
    }, 400);
         }
          function openRanking_popup(){
         $("#rankpop").css("display","block");    
         $('#rankpop').velocity({opacity:[1,0]}, {delay: 0, duration: 300, ease: 'swing'});
         $(".rankShitwrp").velocity({translateY: [0,  '100vh'],opacity:[1,0]}, {delay: 180, duration: 600, easing: [20, 6],display: 'block'});
        }
        
     function closeRanking_popup() {
    $('#rankpop').fadeOut();
    setTimeout(function () {
        $(".rankShitwrp").velocity({translateY: ['100vh', 0], opacity: [0, 1]}, {delay: 0, duration: 200, ease: 'swing', display: 'none'});
        $("#rankpop").velocity({opacity: [0, 1]}, {duration: 200, delay: 0, ease: 'swing'});
    }, 400);
   }
   
  $('#applypop').velocity({opacity: 0,display:"none"}, {delay: 0, duration: 0});
  $('.appyp_popcnt').velocity({translateY:"100vh",opacity:0}, {delay: 0, duration: 0,display:'none'});
  
       function openapply_popup(){
         $("#applypop").css("display","block");    
         $('#applypop').velocity({opacity:[1,0]}, {delay: 0, duration: 300, ease: 'swing'});
         $(".appyp_popcnt").velocity({translateY: [0,  '100vh'],opacity:[1,0]}, {delay: 180, duration: 600, easing: [20, 6],display: 'block'});
        } 
     function closeapply_popup() {
    $('#applypop').fadeOut();
    setTimeout(function () {
        $(".appyp_popcnt").velocity({translateY: ['100vh', 0], opacity: [0, 1]}, {delay: 0, duration: 200, ease: 'swing', display: 'none'});
        $("#applypop").velocity({opacity: [0, 1]}, {duration: 200, delay: 0, ease: 'swing'});
       $('.apply_msgwrp').velocity({translateY: [0, -20], opacity:[1,0]}, {duration: 300, easing: 'easeInOut', display: 'block'});
     $('.emd_msgwrp').velocity({translateY: [20, 0], opacity:[0,1]}, {duration: 300, easing: 'easeInOut', display: 'none'});
    }, 400);
   }
   function changeEmd(){
     $('.apply_msgwrp').velocity({translateY: [-20, 0], opacity:[0,1]}, {duration: 300, easing: 'easeInOut', display: 'none'});
     $('.emd_msgwrp').velocity({translateY: [0, 20], opacity:[1,0]}, {duration: 300, easing: 'easeInOut', display: 'block'});
   }


