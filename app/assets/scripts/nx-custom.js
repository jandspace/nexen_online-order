// Sticky Sidebar
$(document).ready(function() {
	var $window = $(window);  
	var $sidebar = $(".sidebar-inner"); 
	var $sidebarHeight = $sidebar.innerHeight();   
	var $footerOffsetTop = $(".nx-footer").offset().top; 
	var $sidebarOffset = $sidebar.offset();
	
	$window.scroll(function() {
		if($window.scrollTop() > $sidebarOffset.top) {
			$sidebar.addClass("fixed");   
		} else {
			$sidebar.removeClass("fixed");   
		}    
		if($window.scrollTop() + $sidebarHeight > $footerOffsetTop) {
			$sidebar.css({"top" : -($window.scrollTop() + $sidebarHeight - $footerOffsetTop)});        
		} else {
			$sidebar.css({"top": "64px",});  
		}    
	});
});