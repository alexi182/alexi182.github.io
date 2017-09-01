require('../../vendor/slick');

$('.teacher-slider').slick({

    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 400,
    responsive: [
	{
	  breakpoint: 1270,
	  settings: {
	    slidesToShow: 4,
	    slidesToScroll: 1,
	    infinite: true,
	    speed: 400
	  }
	},
	{
	  breakpoint: 1120,
	  settings: {
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    infinite: true,
	    speed: 400
	  }
	}
]
    
});

$('.rm-slider-box').slick({

});

