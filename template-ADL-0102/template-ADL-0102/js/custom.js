$(document).ready(function() {	

	$('#slider-main').slick({
		dots: true,
		infinite: true,
		autoplaySpeed: 90000,
		speed:500,
		fade: false,
		cssEase: 'linear',
		arrows: false,
		autoplay: true,
		pauseOnHover: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: true,
		});

       
   $('#slide_offre').slick({
		dots: true,
		infinite: true,
		autoplaySpeed: 8000,
		speed:500,
		fade: false,
		cssEase: 'linear',
		arrows: true,
		autoplay: true,
		pauseOnHover: false,
		slidesToShow: 2,
		slidesToScroll: 2,
		draggable: true,
		responsive: [
			{
				breakpoint:1023,
				settings: { 
				slidesToShow: 2,
                slidesToScroll:1, 
				infinite:true,
				draggable: true
				}
			},
				
			{
				breakpoint: 767,
				settings: { 
					slidesToShow:2, 
					slidesToScroll:1, 
					infinite:true,
					arrows: true,
					draggable: true
                   

				}
			},
			{
				breakpoint: 501,
                settings: { 
					slidesToShow:1, 
					slidesToScroll:1, 
					infinite:true,
					arrows: true,
					dots: false,
					draggable: true
                   

				}
				
			}
		]});

   $('#slide_actu').slick({
		dots: true,
		infinite: true,
		autoplaySpeed: 90000,
		speed:500,
		fade: false,
		cssEase: 'linear',
		arrows: false,
		autoplay: true,
		pauseOnHover: false,
		slidesToShow: 3,
		slidesToScroll: 3,
		draggable: true,
		responsive: [
			{
				breakpoint:1023,
				settings: { 
				slidesToShow: 2,
                slidesToScroll:2, 
				infinite:true,
				draggable: true
				}
			},
				
			{
				breakpoint: 767,
				settings: { 
					slidesToShow:2, 
					slidesToScroll:2, 
					infinite:true,
					arrows: true,
					draggable: true
                   

				}
			},
			{
				breakpoint: 501,
                settings: { 
					slidesToShow:1, 
					slidesToScroll:1, 
					infinite:true,
					arrows: true,
					dots: false,
					draggable: true
                   

				}
				
			}
		]});

	$('#slide_actu_right').slick({
		dots: true,
		infinite: true,
		autoplaySpeed: 90000,
		speed:500,
		fade: false,
		cssEase: 'linear',
		arrows: false,
		autoplay: true,
		pauseOnHover: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: true,
		responsive: [
			{
				breakpoint:1023,
				settings: { 
				slidesToShow: 1,
                slidesToScroll:1, 
				infinite:true,
				draggable: true
				}
			},
				
			{
				breakpoint: 767,
				settings: { 
					slidesToShow:1, 
					slidesToScroll:1, 
					infinite:true,
					arrows: true,
					draggable: true
                   

				}
			},
			{
				breakpoint: 501,
                settings: { 
					slidesToShow:1, 
					slidesToScroll:1, 
					infinite:true,
					arrows: true,
					dots: false,
					draggable: true
                   

				}
				
			}
		]});	    	    

	// ***** FANCYBOX ***** //
	if ($(".fancybox").length > 0) { 
   		 $(".fancybox a").fancybox();
      }

});


