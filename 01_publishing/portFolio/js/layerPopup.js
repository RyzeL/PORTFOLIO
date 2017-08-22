/* ---------------------- ContentsSetting ---------------------- */

$(function(){
    
    /* Project_ layerPopup */
    
    /* 1 */
    $('.layer1').hide();
    
    $('.btn-example').on('click' , function(){
        $('.layer1').show();
    });
    
    $('.cbtn').on('click' , function(){
        $('.layer1').hide();
    });
    
    $('.layer1 .bg').on('click' , function(){	
        $('.layer1').hide();
        e.preventDefault();
    });
    

});	
