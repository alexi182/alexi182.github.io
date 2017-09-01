require('magnific-popup');

if ($('.magn-popup').length > 0) {
    $('.magn-popup').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-fade',
        fixedContentPos: false,
        image: {
            titleSrc: 'title'
        }
    });
}

if ($('.magn-popup__gallery').length > 0) {
    $('.just-gall').each(function () {
        $(this).magnificPopup({
            type: 'image',
            // closeOnContentClick: true,
            delegate: 'a',
            mainClass: 'mfp-fade',
            fixedContentPos: false,
            gallery: {
                enabled: true,
                tCounter: '%curr% из %total%'
            },
            image: {
                titleSrc: 'title'
            }
        });
    });
}

