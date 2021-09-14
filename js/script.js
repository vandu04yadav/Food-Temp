$(document).ready(function(){
    $('.wedd-icon').owlCarousel({
       
        autoplay:true,
        nav:true,
        navText:["&leftarrow;","&rightarrow;"],
        // autoplayTimeout:2000,
        loop:true,
        
        animateOut:'fadein',
        
        responsive:{
            320:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:3
            }
        }
    });
   
});


var a=1;
$(".hamburger").click(function(){
   
    if (a==1){
        $(".menubar-ham").slideDown();
        a++;
    }
    else{
        $(".menubar-ham").slideUp();
        a=1;
    }

});