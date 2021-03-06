 var version1_jQuery = jQuery.noConflict(true);

(function(version1_jQuery){
	version1_jQuery(document).ready(function(){

		version1_jQuery(window).load(function() {
			version1_jQuery("body").addClass("wide");
            version1_jQuery("body").addClass("front");

           // version1_jQuery("body").addClass("fixed-header-on");
		});

		// Enable Smooth Scroll only on Chrome and only on Win and Linux Systems
		var platform = navigator.platform.toLowerCase();
		if ((platform.indexOf('win') == 0 || platform.indexOf('linux') == 0) && !Modernizr.touch) {
			if (version1_jQuery.browser.webkit) {
				//version1_jQuery.webkitSmoothScroll();
				console.log("hello webkit");
			}
		};
		//Show dropdown on hover only for desktop devices
		//-----------------------------------------------
		var delay=0, setTimeoutConst;
		if ((Modernizr.mq('only all and (min-width: 768px)') && !Modernizr.touch) || version1_jQuery("html.ie8").length>0) {
			version1_jQuery('.main-navigation .navbar-nav>li.dropdown, .main-navigation li.dropdown>ul>li.dropdown').hover(
			function(){
				var version1_jQuerythis = version1_jQuery(this);
				setTimeoutConst = setTimeout(function(){
					version1_jQuerythis.addClass('open').slideDown();
					version1_jQuerythis.find('.dropdown-toggle').addClass('disabled');
				}, delay);

			},	function(){
				clearTimeout(setTimeoutConst );
				version1_jQuery(this).removeClass('open');
				version1_jQuery(this).find('.dropdown-toggle').removeClass('disabled');
			});
		};



		//Show dropdown on click only for mobile devices
		//-----------------------------------------------
		if (Modernizr.mq('only all and (max-width: 767px)') || Modernizr.touch) {
			version1_jQuery('.main-navigation [data-toggle=dropdown], .header-top [data-toggle=dropdown]').on('click', function(event) {
			// Avoid following the href location when clicking
			event.preventDefault();
			// Avoid having the menu to close when clicking
			event.stopPropagation();
			// close all the siblings
			version1_jQuery(this).parent().siblings().removeClass('open');
			// close all the submenus of siblings
			version1_jQuery(this).parent().siblings().find('[data-toggle=dropdown]').parent().removeClass('open');
			// opening the one you clicked on
			version1_jQuery(this).parent().toggleClass('open');
			});
		};

		//Main slider
		//-----------------------------------------------

		//Revolution Slider
		if (version1_jQuery(".slider-banner-container").length>0) {

			version1_jQuery(".tp-bannertimer").show();

			version1_jQuery('.slider-banner-container .slider-banner').show().revolution({
				delay:10000,
				startwidth:1140,
				startheight:520,

				navigationArrows:"solo",

				navigationStyle: "round",
				navigationHAlign:"center",
				navigationVAlign:"bottom",
				navigationHOffset:0,
				navigationVOffset:20,

				soloArrowLeftHalign:"left",
				soloArrowLeftValign:"center",
				soloArrowLeftHOffset:20,
				soloArrowLeftVOffset:0,

				soloArrowRightHalign:"right",
				soloArrowRightValign:"center",
				soloArrowRightHOffset:20,
				soloArrowRightVOffset:0,

				fullWidth:"on",

				spinner:"spinner0",

				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,
				onHoverStop: "off",

				shuffle:"off",

				autoHeight:"off",
				forceFullWidth:"off",

				hideThumbsOnMobile:"off",
				hideNavDelayOnMobile:1500,
				hideBulletsOnMobile:"off",
				hideArrowsOnMobile:"off",
				hideThumbsUnderResolution:0,

				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				startWithSlide:0
			});

			version1_jQuery('.slider-banner-container .slider-banner-2').show().revolution({
				delay:10000,
				startwidth:1140,
				startheight:520,

				navigationArrows:"solo",

				navigationStyle: "preview4",
				navigationHAlign:"center",
				navigationVAlign:"bottom",
				navigationHOffset:0,
				navigationVOffset:20,

				soloArrowLeftHalign:"left",
				soloArrowLeftValign:"center",
				soloArrowLeftHOffset:20,
				soloArrowLeftVOffset:0,

				soloArrowRightHalign:"right",
				soloArrowRightValign:"center",
				soloArrowRightHOffset:20,
				soloArrowRightVOffset:0,

				fullWidth:"on",

				spinner:"spinner0",

				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,
				onHoverStop: "off",

				shuffle:"off",

				autoHeight:"off",
				forceFullWidth:"off",

				hideThumbsOnMobile:"off",
				hideNavDelayOnMobile:1500,
				hideBulletsOnMobile:"off",
				hideArrowsOnMobile:"off",
				hideThumbsUnderResolution:0,

				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				startWithSlide:0
			});

			version1_jQuery('.slider-banner-container .slider-banner-3').show().revolution({
				delay:10000,
				startwidth:1140,
				startheight:520,
				dottedOverlay: "twoxtwo",

				parallax:"mouse",
				parallaxBgFreeze:"on",
				parallaxLevels:[3,2,1],

				navigationArrows:"solo",

				navigationStyle: "preview5",
				navigationHAlign:"center",
				navigationVAlign:"bottom",
				navigationHOffset:0,
				navigationVOffset:20,

				soloArrowLeftHalign:"left",
				soloArrowLeftValign:"center",
				soloArrowLeftHOffset:20,
				soloArrowLeftVOffset:0,

				soloArrowRightHalign:"right",
				soloArrowRightValign:"center",
				soloArrowRightHOffset:20,
				soloArrowRightVOffset:0,

				fullWidth:"on",

				spinner:"spinner0",

				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,
				onHoverStop: "off",

				shuffle:"off",

				autoHeight:"off",
				forceFullWidth:"off",

				hideThumbsOnMobile:"off",
				hideNavDelayOnMobile:1500,
				hideBulletsOnMobile:"off",
				hideArrowsOnMobile:"off",
				hideThumbsUnderResolution:0,

				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				startWithSlide:0
			});

			if (version1_jQuery(".transparent.header").length>0 || version1_jQuery(".offcanvas-container").length>0) {
				version1_jQuery('.slider-banner-container .slider-banner-fullscreen').show().revolution({
					delay:10000,
					startwidth:1140,
					startheight:520,
					fullWidth:"off",
					fullScreen:"on",
					fullScreenOffsetContainer: "",
					fullScreenOffset: "",

					navigationArrows:"solo",

					navigationStyle: "preview4",
					navigationHAlign:"center",
					navigationVAlign:"bottom",
					navigationHOffset:0,
					navigationVOffset:20,

					soloArrowLeftHalign:"left",
					soloArrowLeftValign:"center",
					soloArrowLeftHOffset:20,
					soloArrowLeftVOffset:0,

					soloArrowRightHalign:"right",
					soloArrowRightValign:"center",
					soloArrowRightHOffset:20,
					soloArrowRightVOffset:0,

					spinner:"spinner4",

					stopLoop:"off",
					stopAfterLoops:-1,
					stopAtSlide:-1,
					onHoverStop: "off",

					shuffle:"off",
					hideTimerBar:"on",

					autoHeight:"off",
					forceFullWidth:"off",

					hideThumbsOnMobile:"off",
					hideNavDelayOnMobile:1500,
					hideBulletsOnMobile:"off",
					hideArrowsOnMobile:"off",
					hideThumbsUnderResolution:0,

					hideSliderAtLimit:0,
					hideCaptionAtLimit:0,
					hideAllCaptionAtLilmit:0,
					startWithSlide:0
				});
			} else {
				version1_jQuery('.slider-banner-container .slider-banner-fullscreen').show().revolution({
					delay:10000,
					startwidth:1140,
					startheight:520,
					fullWidth:"off",
					fullScreen:"on",
					fullScreenOffsetContainer: "",
					fullScreenOffset: "82px",

					navigationArrows:"solo",

					navigationStyle: "preview4",
					navigationHAlign:"center",
					navigationVAlign:"bottom",
					navigationHOffset:0,
					navigationVOffset:20,

					soloArrowLeftHalign:"left",
					soloArrowLeftValign:"center",
					soloArrowLeftHOffset:20,
					soloArrowLeftVOffset:0,

					soloArrowRightHalign:"right",
					soloArrowRightValign:"center",
					soloArrowRightHOffset:20,
					soloArrowRightVOffset:0,

					spinner:"spinner4",

					stopLoop:"off",
					stopAfterLoops:-1,
					stopAtSlide:-1,
					onHoverStop: "off",

					shuffle:"off",
					hideTimerBar:"on",

					autoHeight:"off",
					forceFullWidth:"off",

					hideThumbsOnMobile:"off",
					hideNavDelayOnMobile:1500,
					hideBulletsOnMobile:"off",
					hideArrowsOnMobile:"off",
					hideThumbsUnderResolution:0,

					hideSliderAtLimit:0,
					hideCaptionAtLimit:0,
					hideAllCaptionAtLilmit:0,
					startWithSlide:0
				});
			};

			if (version1_jQuery(".transparent.header").length>0 || version1_jQuery(".offcanvas-container").length>0) {
				version1_jQuery('.slider-banner-container .slider-banner-fullscreen-alt-nav').show().revolution({
					delay:10000,
					startwidth:1140,
					startheight:520,
					fullWidth:"off",
					fullScreen:"on",
					fullScreenOffsetContainer: "",
					fullScreenOffset: "",

					navigationArrows:"solo",

					navigationStyle: "preview2",
					navigationHAlign:"center",
					navigationVAlign:"bottom",
					navigationHOffset:0,
					navigationVOffset:20,

					soloArrowLeftHalign:"left",
					soloArrowLeftValign:"center",
					soloArrowLeftHOffset:20,
					soloArrowLeftVOffset:0,

					soloArrowRightHalign:"right",
					soloArrowRightValign:"center",
					soloArrowRightHOffset:20,
					soloArrowRightVOffset:0,

					spinner:"spinner4",

					stopLoop:"off",
					stopAfterLoops:-1,
					stopAtSlide:-1,
					onHoverStop: "off",

					shuffle:"off",
					hideTimerBar:"on",

					autoHeight:"off",
					forceFullWidth:"off",

					hideThumbsOnMobile:"off",
					hideNavDelayOnMobile:1500,
					hideBulletsOnMobile:"off",
					hideArrowsOnMobile:"off",
					hideThumbsUnderResolution:0,

					hideSliderAtLimit:0,
					hideCaptionAtLimit:0,
					hideAllCaptionAtLilmit:0,
					startWithSlide:0
				});
			} else {
				version1_jQuery('.slider-banner-container .slider-banner-fullscreen-alt-nav').show().revolution({
					delay:10000,
					startwidth:1140,
					startheight:520,
					fullWidth:"off",
					fullScreen:"on",
					fullScreenOffsetContainer: "",
					fullScreenOffset: "82px",

					navigationArrows:"solo",

					navigationStyle: "preview2",
					navigationHAlign:"center",
					navigationVAlign:"bottom",
					navigationHOffset:0,
					navigationVOffset:20,

					soloArrowLeftHalign:"left",
					soloArrowLeftValign:"center",
					soloArrowLeftHOffset:20,
					soloArrowLeftVOffset:0,

					soloArrowRightHalign:"right",
					soloArrowRightValign:"center",
					soloArrowRightHOffset:20,
					soloArrowRightVOffset:0,

					spinner:"spinner4",

					stopLoop:"off",
					stopAfterLoops:-1,
					stopAtSlide:-1,
					onHoverStop: "off",

					shuffle:"off",
					hideTimerBar:"on",

					autoHeight:"off",
					forceFullWidth:"off",

					hideThumbsOnMobile:"off",
					hideNavDelayOnMobile:1500,
					hideBulletsOnMobile:"off",
					hideArrowsOnMobile:"off",
					hideThumbsUnderResolution:0,

					hideSliderAtLimit:0,
					hideCaptionAtLimit:0,
					hideAllCaptionAtLilmit:0,
					startWithSlide:0
				});
			};

		};

		//Owl carousel
		//-----------------------------------------------

		if (version1_jQuery('.owl-carousel').length>0) {
			version1_jQuery(".owl-carousel.carousel").owlCarousel({
				items: 4,
				pagination: false,
				navigation: true,
				navigationText: false
			});
			version1_jQuery(".owl-carousel.carousel-autoplay").owlCarousel({
				items: 4,
				autoPlay: 5000,
				pagination: false,
				navigation: true,
				navigationText: false
			});
			version1_jQuery(".owl-carousel.clients").owlCarousel({
				items: 4,
				autoPlay: true,
				pagination: false,
				itemsDesktopSmall: [992,5],
				itemsTablet: [768,4],
				itemsMobile: [479,3]
			});
			version1_jQuery(".owl-carousel.content-slider").owlCarousel({
				singleItem: true,
				autoPlay: 5000,
				navigation: false,
				navigationText: false,
				pagination: false
			});
			version1_jQuery(".owl-carousel.content-slider-with-controls").owlCarousel({
				singleItem: true,
				autoPlay: false,
				navigation: true,
				navigationText: false,
				pagination: true
			});
			version1_jQuery(".owl-carousel.content-slider-with-controls-autoplay").owlCarousel({
				singleItem: true,
				autoPlay: 5000,
				navigation: true,
				navigationText: false,
				pagination: true
			});
			version1_jQuery(".owl-carousel.content-slider-with-controls-bottom").owlCarousel({
				singleItem: true,
				autoPlay: false,
				navigation: true,
				navigationText: false,
				pagination: true
			});
		};

		// Animations
		//-----------------------------------------------
		if ((version1_jQuery("[data-animation-effect]").length>0) && !Modernizr.touch) {
			version1_jQuery("[data-animation-effect]").each(function() {
				var item = version1_jQuery(this),
				animationEffect = item.attr("data-animation-effect");

				if(Modernizr.mq('only all and (min-width: 768px)') && Modernizr.csstransitions) {
					item.appear(function() {
						if(item.attr("data-effect-delay")) item.css("effect-delay", delay + "ms");
						setTimeout(function() {
							item.addClass('animated object-visible ' + animationEffect);

						}, item.attr("data-effect-delay"));
					}, {accX: 0, accY: -130});
				} else {
					item.addClass('object-visible');
				}
			});
		};

		// Text Rotators
		//-----------------------------------------------
		if (version1_jQuery(".text-rotator").length>0) {
			version1_jQuery(".text-rotator").each(function() {
				var tr_animationEffect = version1_jQuery(this).attr("data-rotator-animation-effect");
				version1_jQuery(this).Morphext({
					animation: ""+tr_animationEffect+"", // Overrides default "bounceIn"
					separator: ",", // Overrides default ","
					speed: 5000 // Overrides default 2000
				});
			});
		};

		// Stats Count To
		//-----------------------------------------------
		if (version1_jQuery(".stats [data-to]").length>0) {
			version1_jQuery(".stats [data-to]").each(function() {
				var stat_item = version1_jQuery(this),
				offset = stat_item.offset().top;
				if(version1_jQuery(window).scrollTop() > (offset - 800) && !(stat_item.hasClass('counting'))) {
					stat_item.addClass('counting');
					stat_item.countTo();
				};
				version1_jQuery(window).scroll(function() {
					if(version1_jQuery(window).scrollTop() > (offset - 800) && !(stat_item.hasClass('counting'))) {
						stat_item.addClass('counting');
						stat_item.countTo();
					}
				});
			});
		};

		// Isotope filters
		//-----------------------------------------------
		if (version1_jQuery('.isotope-container').length>0 || version1_jQuery('.masonry-grid').length>0 || version1_jQuery('.masonry-grid-fitrows').length>0) {
			version1_jQuery(window).load(function() {
				version1_jQuery('.masonry-grid').isotope({
					itemSelector: '.masonry-grid-item',
					layoutMode: 'masonry'
				});
				version1_jQuery('.masonry-grid-fitrows').isotope({
					itemSelector: '.masonry-grid-item',
					layoutMode: 'fitRows'
				});
				version1_jQuery('.isotope-container').fadeIn();
				var version1_jQuerycontainer = version1_jQuery('.isotope-container').isotope({
					itemSelector: '.isotope-item',
					layoutMode: 'masonry',
					transitionDuration: '0.6s',
					filter: "*"
				});
				// filter items on button click
				version1_jQuery('.filters').on( 'click', 'ul.nav li a', function() {
					var filterValue = version1_jQuery(this).attr('data-filter');
					version1_jQuery(".filters").find("li.active").removeClass("active");
					version1_jQuery(this).parent().addClass("active");
					version1_jQuerycontainer.isotope({ filter: filterValue });
					return false;
				});
			});
		};


		//hc-tabs
		//-----------------------------------------------
		if (version1_jQuery('.hc-tabs').length>0) {
			version1_jQuery(window).load(function() {
				var currentTab = version1_jQuery(".hc-tabs .nav.nav-tabs li.active a").attr("href"),
				tabsImageAnimation = version1_jQuery(".hc-tabs-top").find("[data-tab='" + currentTab + "']").attr("data-tab-animation-effect");
				version1_jQuery(".hc-tabs-top").find("[data-tab='" + currentTab + "']").addClass("current-img show " + tabsImageAnimation + " animated");

				version1_jQuery('.hc-tabs .nav.nav-tabs li a').on('click', function(event) {
					var currentTab = version1_jQuery(this).attr("href"),
					tabsImageAnimation = version1_jQuery(".hc-tabs-top").find("[data-tab='" + currentTab + "']").attr("data-tab-animation-effect");
					version1_jQuery(".current-img").removeClass("current-img show " + tabsImageAnimation + " animated");
					version1_jQuery(".hc-tabs-top").find("[data-tab='" + currentTab + "']").addClass("current-img show " + tabsImageAnimation + " animated");
				});
			});

		}

		// Animated Progress Bars
		//-----------------------------------------------
		if (version1_jQuery("[data-animate-width]").length>0) {
			version1_jQuery("[data-animate-width]").each(function() {
				version1_jQuery(this).appear(function() {
					version1_jQuery(this).animate({
						width: version1_jQuery(this).attr("data-animate-width")
					}, 800 );
				}, {accX: 0, accY: -100});
			});
		};

		// Animated Progress Bars
		//-----------------------------------------------
		if (version1_jQuery(".knob").length>0) {
			version1_jQuery(".knob").knob();
		}

		// Charts
		//-----------------------------------------------
		if (version1_jQuery(".graph").length>0) {
			// Creates random numbers you don't need this for real graphs
			var randomScalingFactor = function(){ return Math.round(Math.random()*500)};

			if (version1_jQuery(".graph.line").length>0) {
				// Data for line charts
				var lineChartData = {
					labels : ["January","February","March","April","May","June","July"],
					datasets : [
					{
						label: "First dataset",
						fillColor : "rgba(188,188,188,0.2)",
						strokeColor : "rgba(188,188,188,1)",
						pointColor : "rgba(188,188,188,1)",
						pointStrokeColor : "#fff",
						pointHighlightFill : "#fff",
						pointHighlightStroke : "rgba(188,188,188,1)",
						data : [250,300,250,200,250,300,250]
					},
					{
						label: "Second dataset",
						fillColor : "rgba(126,187,205,0.2)",
						strokeColor : "rgba(126,187,205,1)",
						pointColor : "rgba(126,187,205,1)",
						pointStrokeColor : "#fff",
						pointHighlightFill : "#fff",
						pointHighlightStroke : "rgba(126,187,205,1)",
						data : [300,250,200,250,300,250,200]
					},
					{
						label: "Third dataset",
						fillColor : "rgba(98,187,205,0.2)",
						strokeColor : "rgba(98,187,205,1)",
						pointColor : "rgba(98,187,205,1)",
						pointStrokeColor : "#fff",
						pointHighlightFill : "#fff",
						pointHighlightStroke : "rgba(98,187,205,1)",
						data : [0,100,200,300,400,500,400]
					}
					]
				}

				// Line Charts Initialization
				version1_jQuery(window).load(function() {
					var ctx = document.getElementById("lines-graph").getContext("2d");
					window.newLine = new Chart(ctx).Line(lineChartData, {
						responsive: true,
						bezierCurve : false
					});
				});
			}
			if (version1_jQuery(".graph.bar").length>0) {
				// Data for bar charts
				var barChartData = {
					labels : ["January","February","March","April","May","June","July"],
					datasets : [
						{
							fillColor : "rgba(188,188,188,0.5)",
							strokeColor : "rgba(188,188,188,0.8)",
							highlightFill: "rgba(188,188,188,0.75)",
							highlightStroke: "rgba(188,188,188,1)",
							data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
						},
						{
							fillColor : "rgba(168,187,205,0.5)",
							strokeColor : "rgba(168,187,205,0.8)",
							highlightFill : "rgba(168,187,205,0.75)",
							highlightStroke : "rgba(168,187,205,1)",
							data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
						}
					]
				}

				// Bar Charts Initialization
				version1_jQuery(window).load(function() {
					var ctx = document.getElementById("bars-graph").getContext("2d");
					window.myBar = new Chart(ctx).Bar(barChartData, {
						responsive : true
					});
				});
			}
			if (version1_jQuery(".graph.pie").length>0) {
				// Data for pie chart
				var pieData = [
					{
						value: 120,
						color:"#09afdf",
						highlight: "#6BD5F4",
						label: "Blue"
					},
					{
						value: 120,
						color: "#FDB45C",
						highlight: "#FFC870",
						label: "Yellow"
					},
					{
						value: 120,
						color: "#4D5360",
						highlight: "#616774",
						label: "Dark Grey"
					}
				];

				// Pie Chart Initialization
				version1_jQuery(window).load(function() {
					var ctx = document.getElementById("pie-graph").getContext("2d");
					window.myPie = new Chart(ctx).Pie(pieData);
				});
			}
			if (version1_jQuery(".graph.doughnut").length>0) {
				// Data for doughnut chart
				var doughnutData = [
					{
						value: 120,
						color:"#09afdf",
						highlight: "#6BD5F4",
						label: "Blue"
					},
					{
						value: 120,
						color: "#FDB45C",
						highlight: "#FFC870",
						label: "Yellow"
					},
					{
						value: 120,
						color: "#4D5360",
						highlight: "#616774",
						label: "Dark Grey"
					}
				];

				// Doughnut Chart Initialization
				version1_jQuery(window).load(function() {
					var ctx = document.getElementById("doughnut-graph").getContext("2d");
					window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {responsive : true});
				});
			}
		};

		// Magnific popup
		//-----------------------------------------------
		if ((version1_jQuery(".popup-img").length > 0) || (version1_jQuery(".popup-iframe").length > 0) || (version1_jQuery(".popup-img-single").length > 0)) {
			version1_jQuery(".popup-img").magnificPopup({
				type:"image",
				gallery: {
					enabled: true,
				}
			});
			version1_jQuery(".popup-img-single").magnificPopup({
				type:"image",
				gallery: {
					enabled: false,
				}
			});
			version1_jQuery('.popup-iframe').magnificPopup({
				disableOn: 700,
				type: 'iframe',
				preloader: false,
				fixedContentPos: false
			});
		};

		// Fixed header
		//-----------------------------------------------

		var	headerTopHeight = version1_jQuery(".header-top").outerHeight(),
		headerHeight = version1_jQuery("header.header.fixed").outerHeight();
		version1_jQuery(window).scroll(function() {
			if ((version1_jQuery(".header.fixed").length > 0)) {
				if((version1_jQuery(this).scrollTop() > headerTopHeight+headerHeight) && (version1_jQuery(window).width() > 767)) {
					version1_jQuery("body").addClass("fixed-header-on");
					version1_jQuery(".header.fixed").addClass('animated object-visible fadeInDown');
					if (!(version1_jQuery(".header.transparent").length>0)) {
						if (version1_jQuery(".banner:not(.header-top)").length>0) {
							version1_jQuery(".banner").css("marginTop", (headerHeight)+"px");
						} else if (version1_jQuery(".page-intro").length>0) {
							version1_jQuery(".page-intro").css("marginTop", (headerHeight)+"px");
						} else if (version1_jQuery(".page-top").length>0) {
							version1_jQuery(".page-top").css("marginTop", (headerHeight)+"px");
						} else {
							version1_jQuery("section.main-container").css("marginTop", (headerHeight)+"px");
						}
					}
				} else {
					version1_jQuery("body").removeClass("fixed-header-on");
					version1_jQuery("section.main-container").css("marginTop", (0)+"px");
					version1_jQuery(".banner").css("marginTop", (0)+"px");
					version1_jQuery(".page-intro").css("marginTop", (0)+"px");
					version1_jQuery(".page-top").css("marginTop", (0)+"px");
					version1_jQuery(".header.fixed").removeClass('animated object-visible fadeInDown');
				}
			};
		});


		// Sharrre plugin
		//-----------------------------------------------
		if (version1_jQuery('#share').length>0) {
			version1_jQuery('#share').sharrre({
				share: {
					twitter: true,
					facebook: true,
					googlePlus: true
				},
				template: '<ul class="social-links clearfix"><li class="facebook"><a href="#"><i class="fa fa-facebook"></i></a></li><li class="twitter"><a href="#"><i class="fa fa-twitter"></i></a></li><li class="googleplus"><a href="#"><i class="fa fa-google-plus"></i></a></li></ul>',
				enableHover: false,
				enableTracking: true,
				render: function(api, options){
					version1_jQuery(api.element).on('click', '.twitter a', function() {
						api.openPopup('twitter');
					});
					version1_jQuery(api.element).on('click', '.facebook a', function() {
						api.openPopup('facebook');
					});
					version1_jQuery(api.element).on('click', '.googleplus a', function() {
						api.openPopup('googlePlus');
					});
				}
			});
		};

		// Contact forms validation
		//-----------------------------------------------
		if(version1_jQuery("#contact-form").length>0) {
			version1_jQuery("#contact-form").validate({
				submitHandler: function(form) {
					version1_jQuery('.submit-button').button("loading");
					version1_jQuery.ajax({
						type: "POST",
						url: "php/email-sender.php",
						data: {
							"name": version1_jQuery("#contact-form #name").val(),
							"email": version1_jQuery("#contact-form #email").val(),
							"subject": version1_jQuery("#contact-form #subject").val(),
							"message": version1_jQuery("#contact-form #message").val()
						},
						dataType: "json",
						success: function (data) {
							if (data.sent == "yes") {
								version1_jQuery("#MessageSent").removeClass("hidden");
								version1_jQuery("#MessageNotSent").addClass("hidden");
								version1_jQuery(".submit-button").removeClass("btn-default").addClass("btn-success").prop('value', 'Message Sent');
								version1_jQuery("#contact-form .form-control").each(function() {
									version1_jQuery(this).prop('value', '').parent().removeClass("has-success").removeClass("has-error");
								});
							} else {
								version1_jQuery("#MessageNotSent").removeClass("hidden");
								version1_jQuery("#MessageSent").addClass("hidden");
							}
						}
					});
				},
				// debug: true,
				errorPlacement: function(error, element) {
					error.insertBefore( element );
				},
				onkeyup: false,
				onclick: false,
				rules: {
					name: {
						required: true,
						minlength: 2
					},
					email: {
						required: true,
						email: true
					},
					subject: {
						required: true
					},
					message: {
						required: true,
						minlength: 10
					}
				},
				messages: {
					name: {
						required: "Please specify your name",
						minlength: "Your name must be longer than 2 characters"
					},
					email: {
						required: "We need your email address to contact you",
						email: "Please enter a valid email address e.g. name@domain.com"
					},
					subject: {
						required: "Please enter a subject"
					},
					message: {
						required: "Please enter a message",
						minlength: "Your message must be longer than 10 characters"
					}
				},
				errorElement: "span",
				highlight: function (element) {
					version1_jQuery(element).parent().removeClass("has-success").addClass("has-error");
					version1_jQuery(element).siblings("label").addClass("hide");
				},
				success: function (element) {
					version1_jQuery(element).parent().removeClass("has-error").addClass("has-success");
					version1_jQuery(element).siblings("label").removeClass("hide");
				}
			});
		};

		/*if(version1_jQuery("#footer-form").length>0) {
			version1_jQuery("#footer-form").validate({
				submitHandler: function(form) {
					version1_jQuery('.submit-button').button("loading");
					version1_jQuery.ajax({
						type: "POST",
						url: "php/email-sender.php",
						data: {
							"name": version1_jQuery("#footer-form #name2").val(),
							"email": version1_jQuery("#footer-form #email2").val(),
							"subject": "Message from contact form",
							"message": version1_jQuery("#footer-form #message2").val()
						},
						dataType: "json",
						success: function (data) {
							if (data.sent == "yes") {
								version1_jQuery("#MessageSent2").removeClass("hidden");
								version1_jQuery("#MessageNotSent2").addClass("hidden");
								version1_jQuery(".submit-button").removeClass("btn-default").addClass("btn-success").prop('value', 'Message Sent');
								version1_jQuery("#footer-form .form-control").each(function() {
									version1_jQuery(this).prop('value', '').parent().removeClass("has-success").removeClass("has-error");
								});
							} else {
								version1_jQuery("#MessageNotSent2").removeClass("hidden");
								version1_jQuery("#MessageSent2").addClass("hidden");
							}
						}
					});
				},
				// debug: true,
				errorPlacement: function(error, element) {
					error.insertAfter( element );
				},
				onkeyup: false,
				onclick: false,
				rules: {
					name2: {
						required: true,
						minlength: 2
					},
					email2: {
						required: true,
						email: true
					},
					message2: {
						required: true,
						minlength: 10
					}
				},
				messages: {
					name2: {
						required: "Please specify your name",
						minlength: "Your name must be longer than 2 characters"
					},
					email2: {
						required: "We need your email address to contact you",
						email: "Please enter a valid email address e.g. name@domain.com"
					},
					message2: {
						required: "Please enter a message",
						minlength: "Your message must be longer than 10 characters"
					}
				},
				errorElement: "span",
				highlight: function (element) {
					version1_jQuery(element).parent().removeClass("has-success").addClass("has-error");
					version1_jQuery(element).siblings("label").addClass("hide");
				},
				success: function (element) {
					version1_jQuery(element).parent().removeClass("has-error").addClass("has-success");
					version1_jQuery(element).siblings("label").removeClass("hide");
				}
			});
		}; */

		/*if(version1_jQuery("#sidebar-form").length>0) {

			version1_jQuery("#sidebar-form").validate({
				submitHandler: function(form) {
					version1_jQuery('.submit-button').button("loading");
					version1_jQuery.ajax({
						type: "POST",
						url: "php/email-sender.php",
						data: {
							"name": version1_jQuery("#sidebar-form #name3").val(),
							"email": version1_jQuery("#sidebar-form #email3").val(),
							"subject": "Message from FAQ page",
							"category": version1_jQuery("#sidebar-form #category").val(),
							"message": version1_jQuery("#sidebar-form #message3").val()
						},
						dataType: "json",
						success: function (data) {
							if (data.sent == "yes") {
								version1_jQuery("#MessageSent3").removeClass("hidden");
								version1_jQuery("#MessageNotSent3").addClass("hidden");
								version1_jQuery(".submit-button").removeClass("btn-default").addClass("btn-success").prop('value', 'Message Sent');
								version1_jQuery("#sidebar-form .form-control").each(function() {
									version1_jQuery(this).prop('value', '').parent().removeClass("has-success").removeClass("has-error");
								});
							} else {
								version1_jQuery("#MessageNotSent3").removeClass("hidden");
								version1_jQuery("#MessageSent3").addClass("hidden");
							}
						}
					});
				},
				// debug: true,
				errorPlacement: function(error, element) {
					error.insertAfter( element );
				},
				onkeyup: false,
				onclick: false,
				rules: {
					name3: {
						required: true,
						minlength: 2
					},
					email3: {
						required: true,
						email: true
					},
					message3: {
						required: true,
						minlength: 10
					}
				},
				messages: {
					name3: {
						required: "Please specify your name",
						minlength: "Your name must be longer than 2 characters"
					},
					email3: {
						required: "We need your email address to contact you",
						email: "Please enter a valid email address e.g. name@domain.com"
					},
					message3: {
						required: "Please enter a message",
						minlength: "Your message must be longer than 10 characters"
					}
				},
				errorElement: "span",
				highlight: function (element) {
					version1_jQuery(element).parent().removeClass("has-success").addClass("has-error");
				},
				success: function (element) {
					version1_jQuery(element).parent().removeClass("has-error").addClass("has-success");
				}
			});

		}; */
/*
		// Affix plugin
		//-----------------------------------------------
		if (version1_jQuery("#affix").length>0) {
			version1_jQuery(window).load(function() {

				var affixBottom = version1_jQuery(".footer").outerHeight(true) + version1_jQuery(".subfooter").outerHeight(true) + version1_jQuery(".blogpost footer").outerHeight(true),
				affixTop = version1_jQuery("#affix").offset().top;

				if (version1_jQuery(".comments").length>0) {
					affixBottom = affixBottom + version1_jQuery(".comments").outerHeight(true);
				}

				if (version1_jQuery(".comments-form").length>0) {
					affixBottom = affixBottom + version1_jQuery(".comments-form").outerHeight(true);
				}

				if (version1_jQuery(".footer-top").length>0) {
					affixBottom = affixBottom + version1_jQuery(".footer-top").outerHeight(true);
				}

				if (version1_jQuery(".header.fixed").length>0) {
					version1_jQuery("#affix").affix({
				        offset: {
				          top: affixTop-150,
				          bottom: affixBottom+100
				        }
				    });
				} else {
					version1_jQuery("#affix").affix({
				        offset: {
				          top: affixTop-35,
				          bottom: affixBottom+100
				        }
				    });
				}

			});
		}
		if (version1_jQuery(".affix-menu").length>0) {
			setTimeout(function () {
				var version1_jQuerysideBar = version1_jQuery('.sidebar')

				version1_jQuerysideBar.affix({
					offset: {
						top: function () {
							var offsetTop      = version1_jQuerysideBar.offset().top
							return (this.top = offsetTop - 65)
						},
						bottom: function () {
							var affixBottom = version1_jQuery(".footer").outerHeight(true) + version1_jQuery(".subfooter").outerHeight(true)
							if (version1_jQuery(".footer-top").length>0) {
								affixBottom = affixBottom + version1_jQuery(".footer-top").outerHeight(true)
							}
							return (this.bottom = affixBottom+50)
						}
					}
				})
			}, 100)
		}
*/ /*
		//Smooth Scroll
		//-----------------------------------------------
		if (version1_jQuery(".smooth-scroll").length>0) {
			if(version1_jQuery(".header.fixed").length>0) {
				version1_jQuery('.smooth-scroll a[href*=#]:not([href=#]), a[href*=#]:not([href=#]).smooth-scroll').click(function() {
					if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
						var target = version1_jQuery(this.hash);
						target = target.length ? target : version1_jQuery('[name=' + this.hash.slice(1) +']');
						if (target.length) {
							version1_jQuery('html,body').animate({
								scrollTop: target.offset().top-65
							}, 1000);
							return false;
						}
					}
				});
			} else {
				version1_jQuery('.smooth-scroll a[href*=#]:not([href=#]), a[href*=#]:not([href=#]).smooth-scroll').click(function() {
					if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
						var target = version1_jQuery(this.hash);
						target = target.length ? target : version1_jQuery('[name=' + this.hash.slice(1) +']');
						if (target.length) {
							version1_jQuery('html,body').animate({
								scrollTop: target.offset().top
							}, 1000);
							return false;
						}
					}
				});
			}
		}

		//Scroll Spy
		//-----------------------------------------------
		if(version1_jQuery(".scrollspy").length>0) {
			version1_jQuery("body").addClass("scroll-spy");
			if(version1_jQuery(".fixed.header").length>0) {
				version1_jQuery('body').scrollspy({
					target: '.scrollspy',
					offset: 85
				});
			} else {
				version1_jQuery('body').scrollspy({
					target: '.scrollspy',
					offset: 20
				});
			}
		}
*/
		//Video Background
		//-----------------------------------------------
		if(version1_jQuery(".video-background").length>0) {
			if (Modernizr.touch) {
				version1_jQuery(".video-background").vide({
					mp4: "videos/background-video.mp4",
					webm: "videos/background-video.webm",
					poster: "videos/video-fallback.jpg"
				}, {
					volume: 1,
					playbackRate: 1,
					muted: true,
					loop: true,
					autoplay: true,
					position: "50% 60%", // Similar to the CSS `background-position` property.
					posterType: "jpg", // Poster image type. "detect" — auto-detection; "none" — no poster; "jpg", "png", "gif",... - extensions.
					resizing: true
				});
			} else {
				version1_jQuery(".video-background").vide({
					mp4: "videos/background-video.mp4",
					webm: "videos/background-video.webm",
					poster: "videos/video-poster.jpg"
				}, {
					volume: 1,
					playbackRate: 1,
					muted: true,
					loop: true,
					autoplay: true,
					position: "50% 60%", // Similar to the CSS `background-position` property.
					posterType: "jpg", // Poster image type. "detect" — auto-detection; "none" — no poster; "jpg", "png", "gif",... - extensions.
					resizing: true
				});
			};

		};

		//Scroll totop
		//-----------------------------------------------
		version1_jQuery(window).scroll(function() {
			if(version1_jQuery(this).scrollTop() != 0) {
				version1_jQuery(".scrollToTop").fadeIn();
			} else {
				version1_jQuery(".scrollToTop").fadeOut();
			}
		});

		version1_jQuery(".scrollToTop").click(function() {
			version1_jQuery("body,html").animate({scrollTop:0},800);
		});

		//Modal
		//-----------------------------------------------
		if(version1_jQuery(".modal").length>0) {
			version1_jQuery(".modal").each(function() {
				version1_jQuery(".modal").prependTo( "body" );
			});
		}

		// Pricing tables popovers
		//-----------------------------------------------
		if (version1_jQuery(".pricing-tables").length>0) {
			version1_jQuery(".plan .pt-popover").popover({
				trigger: 'hover'
			});
		};

		// Parallax section
		//-----------------------------------------------
		if ((version1_jQuery(".parallax").length>0)  && !Modernizr.touch ){
			version1_jQuery(".parallax").parallax("50%", 0.2, false);
		};

		if ((version1_jQuery(".parallax-2").length>0)  && !Modernizr.touch ){
			version1_jQuery(".parallax-2").parallax("50%", 0.2, false);
		};
		if ((version1_jQuery(".parallax-text").length>0)  && !Modernizr.touch ){
			version1_jQuery(window).scroll(function() {
				//Get the scoll position of the page
				scrollPos = version1_jQuery(this).scrollTop();

				//Scroll and fade out the banner text
				version1_jQuery('.parallax-text').css({
					'opacity' : 1-(scrollPos/400)
				});
			});
		};

		// Remove Button
		//-----------------------------------------------
		version1_jQuery(".btn-remove").click(function() {
			version1_jQuery(this).closest(".remove-data").remove();
		});

		// Shipping Checkbox
		//-----------------------------------------------
		if (version1_jQuery("#shipping-info-check").is(':checked')) {
			version1_jQuery("#shipping-information").hide();
		}
		version1_jQuery("#shipping-info-check").change(function(){
			if (version1_jQuery(this).is(':checked')) {
				version1_jQuery("#shipping-information").slideToggle();
			} else {
				version1_jQuery("#shipping-information").slideToggle();
			}
		});

		//This will prevent the event from bubbling up and close the dropdown when you type/click on text boxes (Header Top).
		//-----------------------------------------------
		version1_jQuery('.header-top .dropdown-menu input').click(function(e) {
			e.stopPropagation();
		});

		// Offcanvas side navbar
		//-----------------------------------------------

		if (version1_jQuery("#offcanvas").length>0) {
			version1_jQuery('#offcanvas').offcanvas({
				disableScrolling: false,
				toggle: false
			});
		};

		if (version1_jQuery("#offcanvas").length>0) {
			version1_jQuery('#offcanvas [data-toggle=dropdown]').on('click', function(event) {
			// Avoid following the href location when clicking
			event.preventDefault();
			// Avoid having the menu to close when clicking
			event.stopPropagation();
			// close all the siblings
			version1_jQuery(this).parent().siblings().removeClass('open');
			// close all the submenus of siblings
			version1_jQuery(this).parent().siblings().find('[data-toggle=dropdown]').parent().removeClass('open');
			// opening the one you clicked on
			version1_jQuery(this).parent().toggleClass('open');
			});
		};

	}); // End document ready

})(this.version1_jQuery);

if (version1_jQuery(".btn-print").length>0)
{
	function print_window() {
		var mywindow = window;
		mywindow.document.close();
		mywindow.focus();
		mywindow.print();
		mywindow.close();
	}
}


if (version1_jQuery(window).ready(function() {

        //Make categorie the first
        var ch=version1_jQuery('#products_attributes_filters');
        var ch2=version1_jQuery('#category-widget');
        version1_jQuery('#products_grid_before').html(ch2);
        version1_jQuery('#products_grid_before').append(ch);

        version1_jQuery("#category-widget li.active").each(function (index) {
            version1_jQuery(this).parents('ul').css('display','block');
            version1_jQuery(this).parents('ul').parent('li').addClass("open");
			version1_jQuery(this).parents('ul').parent('li').find('a .category-widget-btn').addClass("open");

        });

    }));

  version1_jQuery('.zoom-product').elevateZoom(
	   {
		   zoomType	: "lens",
		   lensShape : "round",
		   lensSize : 200
	   }
   );


var owl = version1_jQuery("#owl-related-products");
    owl.owlCarousel({
        items:4,
                transitionStyle:"fadeUp",
                itemsCustom: false,
                itemsDesktop: [1199, 4],
                itemsDesktopSmall: [980, 3],
                itemsTablet: [768, 2],
                itemsTabletSmall: !1,
                itemsMobile: [479, 1],
                autoPlay: true,
                stopOnHover: true,
				pagination: true,


  });
var owl = version1_jQuery("#owl-new-products");
    owl.owlCarousel({
        items:4,
                transitionStyle:"fadeUp",
                itemsCustom: false,
                itemsDesktop: [1199, 4],
                itemsDesktopSmall: [980, 3],
                itemsTablet: [768, 2],
                itemsTabletSmall: !1,
                itemsMobile: [479, 1],
                autoPlay: true,
                stopOnHover: true,
				pagination: true,


  });

  function cart() {
      version1_jQuery('#refresh-cart').removeClass('hidden');

  }

  function removeContenteditable()
  {
      version1_jQuery("body").removeAttr("contenteditable");
  }

  if (version1_jQuery(window).ready(function()
      {
          url=window.location.href;
          result = url.split("/");
          shop_url=result[result.length-2];
          cart_url=result[result.length-1];
          if(shop_url=="shop" && cart_url=="cart")
          {setInterval("cart()", 3000)}

          setInterval("removeContenteditable()", 3000)
      }));
 version1_jQuery('#menu_odoo').remove();