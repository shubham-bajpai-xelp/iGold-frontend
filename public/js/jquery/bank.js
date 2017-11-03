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
        case 'closed_bank':
            $('#live_bank,#srch_livebank,#auc_bank,#srch_aucbank').addClass('dn');
            $('#closed_bank,#srch_closebank').removeClass('dn');
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
        case 'live_bank':
             $('#closed_bank,#srch_closebank,#auc_bank,#srch_aucbank').addClass('dn');
             $('#live_bank,#srch_livebank').removeClass('dn');
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
              case 'auc_bank':
             $('#closed_bank,#srch_closebank,#live_bank,#srch_livebank').addClass('dn');
             $('#srch_aucbank,#auc_bank').removeClass('dn');
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
$('#dltpop').velocity({opacity: 0,display:"none"}, {delay: 0, duration: 0});
  $('.trashPopwrp').velocity({translateY:"100vh",opacity:0}, {delay: 0, duration: 0,display:'none'});
          function openDelete_popup(){
         $("#dltpop").css("display","block");    
         $('#dltpop').velocity({opacity:[1,0]}, {delay: 0, duration: 300, ease: 'swing'});
         $(".trashPopwrp").velocity({translateY: [0,  '100vh'],opacity:[1,0]}, {delay: 180, duration: 600, easing: [20, 6],display: 'block'});
        }
        
         function closeDelete_popup(){
         $('#dltpop').fadeOut();
        setTimeout(function() {
        $(".trashPopwrp").velocity({translateY: ['100vh',  0],opacity:[0,1]}, {delay: 0,duration: 200, ease: 'swing',display:'none'});
        $("#dltpop").velocity({opacity:[0,1]}, {duration: 200, delay: 0, ease: 'swing'});
    }, 400);
         }



