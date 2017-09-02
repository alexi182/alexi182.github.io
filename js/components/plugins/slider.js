require('../../vendor/slick');

$('.slick').slick({

    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 400,
    responsive: [
	{
	  breakpoint: 1125,
	  settings: {
	    slidesToShow: 2,
	    slidesToScroll: 1,
	    infinite: true,
	    speed: 400
	  }
	},
	{
	  breakpoint: 768,
	  settings: {
	    slidesToShow: 2,
	    slidesToScroll: 1,
	    infinite: true,
	    speed: 400
	  }
	}
]
    
});

