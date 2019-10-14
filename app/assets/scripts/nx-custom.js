// *** ACTIVE MENU ITEM ***
$(function() {
	//product.php
	$('body.page-product header .nav-item.nav-to-product').addClass('active');
	//stock.php
	$('body.page-stock header .nav-item.nav-to-stock').addClass('active');
	//order.php
	$('body.page-order header .nav-item.nav-to-order').addClass('active');
	//order > cart.php
	$('body.page-cart header .nav-item.nav-to-order').addClass('active');
	//order-status.php
	$('body.page-order-status header .nav-item.nav-to-order-status').addClass('active');
	//ar-statement.php
	$('body.page-ar-statement header .nav-item.nav-to-ar-statement').addClass('active');
	//label.php
	$('body.page-labelsearch header .nav-item.nav-to-label').addClass('active');
});








// *** STICKY SIDEBAR IN ONLY LARGE DEVICE ***

// function adjustStyle(width) {
// 	width = parseInt(width, 0);
// 	if (width > 1200) {


// 		// Sticky Sidebar > > > > > > > > > > > > > > > > > >
// 		$(document).ready(function() {
// 			var $window = $(window);  
// 			var $sidebar = $(".sidebar-inner"); 
// 			var $sidebarHeight = $sidebar.innerHeight();   
// 			var $footerOffsetTop = $(".nx-footer").offset().top; 
// 			var $sidebarOffset = $sidebar.offset();
			
// 			$window.scroll(function() {
// 				if($window.scrollTop() > $sidebarOffset.top) {
// 					$sidebar.addClass("fixed");   
// 				} else {
// 					$sidebar.removeClass("fixed");   
// 				}    
// 				if($window.scrollTop() + $sidebarHeight > $footerOffsetTop) {
// 					$sidebar.css({"top" : -($window.scrollTop() + $sidebarHeight - $footerOffsetTop)});        
// 				} else {
// 					$sidebar.css({"top": "64px",});  
// 				}    
// 			});
// 		});
// 		// < < < < < < < < < < < < < < < < < < Sticky Sidebar 


// 	}
// }
// $(function() {
// 	adjustStyle($(this).width());
// 	$(window).resize(function() {
// 		adjustStyle($(this).width());
// 	});
// });





// *** STICKY TABLE HEADER ***
function stickyThead(width) {
	width = parseInt(width, 0);
	if (width > 767) {


		// Sticky Table Thead > > > > > > > > > > > > > > > > > >
		var el = document.querySelector('[data-module="sticky-table"]');
		var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
		var thead = el.querySelector('thead');
		var offset = el.getBoundingClientRect();

		// Make sure you throttle/debounce this
		window.addEventListener('scroll', function (event) {
			var rect = el.getBoundingClientRect();

			scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

			if (rect.top < thead.offsetHeight) {
				thead.style.width = rect.width + 'px';
				thead.classList.add('thead--is-fixed');
			} else {
				thead.classList.remove('thead--is-fixed');
			}
		});
		// < < < < < < < < < < < < < < < < < < Sticky Table Thead


	}
}
$(function() {
	stickyThead($(this).width());
	$(window).resize(function() {
		stickyThead($(this).width());
	});
});















// *** GRID & LIST VIEW ***

$("input[type=radio]").change(function() {
	if ($(this).val() == "card") {
		$("#View-Switch").addClass("cardview");
		$("#View-Switch").removeClass("listview");
	} 
	else if ($(this).val() == "list") {
		$("#View-Switch").removeClass("cardview");
		$("#View-Switch").addClass("listview");
	}
});


// *** Force GRIDVIEW on Mobile ***
function MobileCardview(width) {
	width = parseInt(width, 0);
	if (width < 767) {

		$(document).ready(function() {
			$('body.page-order div.view-mode').removeClass('listview').addClass('cardview');
		});

	}
}
$(function() {
	MobileCardview($(this).width());
	$(window).resize(function() {
		MobileCardview($(this).width());
	});
});









// *** DATE PICKER ***

$(function () {
	var date = new Date();
	date.setDate(date.getDate()-1);

	$('#datepicker').datepicker({
		format: "dd/mm/yyyy",
		startDate: date
	});
});









// *** BOOTSTRAP MODAL WITH COOKIE (Auto open on product.php) ***

$(document).ready(function(){
	var cookie = $.cookie('pop');
	if(typeof cookie == 'undefined')
	$('.page-order #NX-Notice-Modal').modal('show');
	$('#remember').click(function() {
		if ($(this).is(':checked')) {
			$.cookie('pop', 'hidden', { expires: 1 });
			// $("#NX-Notice-Modal").modal('hide');
		}
	});
});







// *** BOOTSTRAP POPOVER for Footer content ***

$(function () {
	$('[data-toggle="popover"]').popover()
})






// *** COOKIE CONSENT BAR (Source: https://cookieconsent.osano.com/) ***
$(document).ready(function(){
	window.cookieconsent.initialise({
		"palette": {
			"popup": {
				"background": "rgba(0,0,0,0.8)"
			},
			"button": {
				"background": "#9c0fbf"
			}
		},
		"content": {
			"message": "We use cookies to ensure that we give you the best experience on our website. By closing this\nmessage, you consent to our cookies on this device in accordance with our cookie policy unless you\nhave disabled them.",
			"dismiss": "Got it",
			"href": "/privacy.php"
		},
		"position": "bottom-right"
	});
});











