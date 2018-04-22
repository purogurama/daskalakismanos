   var options = {
       caption:  function(el) {
           return el.getAttribute('data-caption');
       },
       includeImgixJSClass: true,
       /* injectBaseStyles: false*/
   };
    new LuminousGallery(document.querySelectorAll('.gallery-demo'), options, options);


$(document).ready(function(){
    // content list
    $(".content-info").on('affixed.bs.affix', function(){
        $(".contents").css("margin-top", 20 + $(".content-info").outerHeight(true));
    });
    $(".content-info").on('affixed-top.bs.affix', function(){
        $(".contents").css("margin-top", 0);
    });

    // content
    $(".lola").on('affix.bs.affix', function(){
        $(".lola").css("width", "auto");
        $(".lola").css("top", "20px");
        var left = ($(window).width() - ($(".lola").outerWidth() + ($(window).width() - ($(".lola").offset().left + $(".lola").outerWidth()))));
        var right = ($(window).width() - ($(".lola").offset().left + $(".lola").outerWidth()));
        $(".lola").css("left", left + "px");
        $(".lola").css("right", right + "px");
        $(".rest-media").css("margin-top", 20 + $(".lola").outerHeight(true));
        $(".kalimma").show();
    });

    $(".lola").on('affixed-top.bs.affix', function(){
        $(".rest-media").css("margin-top", 0);
        $(".kalimma").hide();
    });
});


   $.fn.moveIt = function(){
       var $window = $(window);
       var instances = [];
       
       $(this).each(function(){
           instances.push(new moveItItem($(this)));
       });
       
       window.addEventListener('scroll', function(){
           var scrollTop = $window.scrollTop();
           instances.forEach(function(inst){
               inst.update(scrollTop);
           });
       }, {passive: true});
   }

   var moveItItem = function(el){
       this.el = $(el);
       this.speed = parseInt(this.el.attr('data-scroll-speed'));
   };

   moveItItem.prototype.update = function(scrollTop){
       this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
   };

   // Initialization
   $(function(){
       $('[data-scroll-speed]').moveIt();
   });





  
