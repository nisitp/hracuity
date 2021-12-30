document.addEventListener("DOMContentLoaded", function(event) { 
    init_tabs();
    // Fix widows

    // fix backgrounds and get rid of weird IDs for CTA buttons
    if (!($("body").hasClass("front"))) {
      $(".hero.with-background, .banner-wrapper, .blog-banner-wrapper").each(function() {            
    
        if (!(/Edge/.test(navigator.userAgent)) && 0) {    // disable everywhere
          $(this).css("background", $(this).find(".with-background").css("background"));
          $(this).addClass("with-background");
          $(this).find(".with-background").css("background","none");    
        } else {
          // Edge was playing up with the above so we're iterating over all children to find the bg. Could probably just use this for all.
          var bg = "";
          $(this).find(".with-background").each(function() {
            if ($(this).css("background-image")) {
              bg = $(this).css("background-image");
            }
          }); 
    
          $(this).css("background-image", bg);
          $(this).addClass("with-background");
          $(this).find(".with-background").css("background","none");  
       } // end if edge   
      });
    }

  
    $("div.cta").parent().addClass("cta-container");
    
    // apply background color to parent (since hubspot doesn't expose classing the wrapper elements very well)
    
    $("div[attr-parent-color]").each(function() { $(this).parent().css("background-color",$(this).attr("attr-parent-color")); });
    
    // apply zebra to parent. In future could make this more generic/expandable
    $("div.zebra-alt").each(function() { $(this).closest(".hs_cos_wrapper_widget").addClass("zebra-alt"); });
  
    // strip weird CTA IDs ... fix this in stylesheets / code after we go live.
    setTimeout(
      function() 
      {
        $(".cta_button").attr("id","");
      }, 1500);      



  // handle alert 'top bars'
  
    if ($(".alert-container").length) {
      // open it
      var alertID = $(".alert-container").attr("id");
      var alertStatus = Cookies.get("tophat_alert");
      if (alertStatus != alertID) {
        // apend it into place
        $(".alert-container").detach().prependTo($(".body-container"));
        
        $(".alert-container .alert-close").click(function() {
            $(".alert-container").removeClass("open");
            Cookies.set("tophat_alert", alertID);// session
        });

        $(".alert-container").delay(1500).queue(function(next) { $(this).addClass("open"); next(); });
      
      }
    }

//    $('h1, h2, h3, .quote').widowFix();  
  
  




});