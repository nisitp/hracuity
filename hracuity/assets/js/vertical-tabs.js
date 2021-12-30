function init_tabs() {
  var count = 1;
  var tabs = document.querySelectorAll('.vertical-tabs');
  var className = 'selected';
  
  Array.prototype.forEach.call(tabs, function(el, i){
    
    // first get or set an ID for the main thing.  For possible future use...
    theID = el.getAttribute('id');
    if (theID == null) {
      el.setAttribute('id', "vertical-tabs-"+count);  
      theID = "vertical-tabs-"+count++;
    }
    
    // now handle clicks of the nav
    
    var navTabs = el.querySelectorAll("ul.tabs li");    
    
    Array.prototype.forEach.call(navTabs, function(tabel, a) {    
      tabel.addEventListener('click', function(e) {
        e.preventDefault();
        
        // unset class on siblings
        Array.prototype.filter.call(tabel.parentNode.children, function(child) {

                    
          if (child == tabel) {
            // add the class
            if (tabel.classList)
              tabel.classList.add(className);
            else
              tabel.className += ' ' + className;              
          } else {
            // remove the class
            if (child.classList)
              child.classList.remove(className);
            else
              el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
          }
        
        }); // end removing selected      
        
        // now turn on the "content" row
        var contentTabs = el.querySelectorAll("ul.content li");
        Array.prototype.forEach.call(contentTabs, function(contel, n) {    
            if (n == a) {
                // add the class
              if (contel.classList) {
                contel.classList.add(className);
              } else {
                contel.className += ' ' + className;                            
              }
            } else {
            // remove the class
              if (contel.classList) {
                contel.classList.remove(className);
              } else {
                contel.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');              
              }            
            }
        }); // end looping over content
        
        
        // cheating by going back to jquery for dev speed

        var thisTab = $(tabel);

        if (thisTab.is(':first-child')) {
          thisTab.closest(".vertical-tabs").addClass("first-active").removeClass("last-active");
        } else if (thisTab.is(':last-child')) {
          thisTab.closest(".vertical-tabs").addClass("last-active").removeClass("first-active");         
        } else {
          thisTab.closest(".vertical-tabs").removeClass("last-active").removeClass("first-active");                   
        }

      }); // end click handling  
    }); // end tab nav
    
  }); // end vertical tab handling
  
  
  

} // end 