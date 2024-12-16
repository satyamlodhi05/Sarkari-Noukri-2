// text slider
    $(document).ready(function () {
        $(".font-page-sliding-job").slick({
            infinite: true,
            arrows: false,
            dots: false,
            autoplay: true,
            autoplaySpeed: 0,
            speed: 5000,   
            cssEase: 'linear',
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    });


