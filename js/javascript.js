$(document).ready(function() {

	if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
      var msViewportStyle = document.createElement('style')
      msViewportStyle.appendChild(
          document.createTextNode(
              '@-ms-viewport{width:auto!important}'
          )
      )
      document.querySelector('head').appendChild(msViewportStyle)
  }
	////////

	$( window ).load(function() {
	   $(".splashLoader").fadeOut(800);
	   $(".wrapper").css({"opacity": "1"},800)
	});


  $('.header_menu_list ul li a').click(function(){
	$('.header_menu_list ul li a').removeClass("active");
	$(this).addClass("active");
  });


	/*** Contact us page Accordian  ***/

	$(".address_outer h3").click(function(e) {
		$(".address_outer h3").removeClass("active");
		$(".address_detail").stop().slideUp();
		$(this).parent().find(".address_detail").stop().slideDown();
		$(this).addClass("active");
	});


	 /****   For Animation on scroll     ****/
	// $('.animated').scrollClass({
  //     delay: 0.5, //set class after 1 milliseconds delay
  //   });

	/******  Scroll to Bottom   ********/
	$(function() {
	  $(".page_scroll_down").on('click', function(e) {
	    e.preventDefault();
	    $("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top}, 1000, 'linear');
	  });
	});

	 /****  Header - Fixed-Class - Add ****/

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
        $("header ").addClass("header_fixed");
    } else {
        $("header").removeClass("header_fixed");
    }
	});

	/*******  Mobile menu Open use class with body  ********/

	$(".menu_icon").click(function(){
		$("body").addClass("menu-open");
	});
	$(".menu_close_icon").click(function(){
		$("body").removeClass("menu-open");
		retern:false;
	});










/*********/
/****** Fancy-Box- start   Images-Gallery , Vedio player Pop-pup ******/


  // Must Use for all fancy-box-section
	$(".fancybox").fancybox();

  // fancy images-open

  // For Gallery Images
  $('.fancybox-buttons').fancybox({
    openEffect  : 'none',
    closeEffect : 'none',

    prevEffect : 'none',
    nextEffect : 'none',

    closeBtn  : false,

    helpers : {
      title : {
        type : 'inside'
      },
      buttons	: {}
    },

    afterLoad : function() {
      this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
    }
  });


    // For Event Images
  $('.event_pop').fancybox({
    openEffect  : 'true',
    closeEffect : 'none',

    prevEffect : 'none',
    nextEffect : 'none',

    closeBtn  : false,

    helpers : {
      title : {
        type : 'inside'
      },
      buttons	: {}
    },

    afterLoad : function() {
      this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
    }
  });



//  fancy media section

	$(".various").fancybox({
		maxWidth	: 800,
		maxHeight	: 600,
		fitToView	: false,
		width		: '70%',
		height		: '70%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});


});
