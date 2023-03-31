import React from 'react';
import Slider from 'react-slick';
import './Carousel.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
        arrows: false
    };

    return (
        <div className="slider">
            <Slider {...settings}>
                <div>

                    <img src="https://cdn.shopify.com/s/files/1/0312/8826/2795/collections/we_dog_food_1350x375.jpg?v=1669802754" alt="Slide 1" />
                </div>
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0109/5945/4271/files/Banner_-_1_Dp_1400x.jpg?v=1657780259" alt="Slide 2" />
                </div>
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0647/3662/4854/collections/Banner-03.jpg?v=1666533897&width=1500" alt="Slide 3" />
                </div>
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0647/3662/4854/files/Website_Banners_New_Arrival_-_Website.png?v=1673608581&width=1500" alt="Slide 4" />
                </div>
            </Slider>
        </div>
    );
}

export default Carousel;
