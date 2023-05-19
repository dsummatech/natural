$(function () {

    window.onscroll = function(){scrollFunction()};
    function scrollFunction() {
        
        
        if (document.body.scrollTop >= 30 || document.documentElement.scrollTop > 30) {
            $(".header").css({"background-color":"white", "box-shadow": "0px 0px 5px black"});
        }
        else{
            $(".header").css({"background-color":"transparent", "box-shadow": "unset"});
        }  
    }


    var n = -1;
    function slider() {
        var images = ["images/CARAMEL-GLOWING-CREAM.jpg","images/FACIAL-TREATMENT.jpg","images/Hyaluronic-acid.jpg","images/NATURAL-SKIN-GLOW-LOTION.jpg"];
        
       
            if (n < 3) {
                n++;
                $(".slider img").attr({"src":images[n]});
            }
            else{
                n=0;
                $(".slider img").attr({"src":images[n]});
            }
    }
    setInterval(slider, 2000);


    $(".menu .big-menu .shop").click(function () {
        $(".menu .big-menu .drop-down").slideToggle();
       });
       $(".body").click(function () {
        $(".menu .big-menu .drop-down").slideUp();
       });

   $(".mobile-menu-btn i").click(function () {
    $(".mobile-menu").fadeIn();
   });
   $(".mobile-menu .rel h1, .body").click(function () {
    $(".mobile-menu").fadeOut();
   });
   $(".mobile-menu .rel .blog").click(function () {
    $(".mobile-menu .rel .drop-down").slideToggle("left");
   });


   var s = 0;

   $(".next-slide .fa-angle-right").click( function () {
        
       
    if (s != 50) {
        s += 25;
        $(".categories .category").css({"right":s + "%"});
    }
});


$(".next-slide .fa-angle-left").click( function () {
        
       
    if (s != 0) {
        s -= 25;
        $(".categories .category").css({"right":s + "%"});
    }
    
});

function slide() {
    if (s != 50) {
        s += 25;
        $(".categories .category").css({"right":s + "%"});
       }
       else{
           s = 0;
           $(".categories .category").css({"right":s + "%"});
       }
}
setInterval(slide, 3000);




var ns = 0;

   $(".before-after-slider .next-slide .fa-angle-right").click( function () {
        
       
    if (ns != 75) {
        ns += 25;
        $(".before-after .section").css({"right":ns + "%"});
    }
});


$(".before-after-slider .next-slide .fa-angle-left").click( function () {
        
       
    if (ns != 0) {
        ns -= 25;
        $(".before-after .section").css({"right":ns + "%"});
    }
    
});

function beforeSlider() {
    if (ns != 75) {
        ns += 25;
        $(".before-after .section").css({"right":ns + "%"});
       }
       else{
           ns = 0;
           $(".before-after .section").css({"right":ns + "%"});;
       }
}
setInterval(beforeSlider, 5000);
   
});