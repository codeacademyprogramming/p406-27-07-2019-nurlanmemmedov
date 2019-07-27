$(document).ready(function () {
    

$(window).scroll(()=>{
    if($('html').scrollTop()>60){
        $('header').addClass('fixed');
    }else{
        $('header').removeClass('fixed');

    }
})
var prevScroll = 60;
$(window).scroll(()=>{
    if($('html').scrollTop()>prevScroll){
        $('header').css('transform','translateY(-90px)')
        prevScroll = $('html').scrollTop();

    }else{
        $('header').css('transform','translateY(0px)')
        prevScroll = $('html').scrollTop();

    }
})
})
