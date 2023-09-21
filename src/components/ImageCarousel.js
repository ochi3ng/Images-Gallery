import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = () => {
    const images = [
        "https://cdn.pixabay.com/photo/2023/02/02/17/00/lions-7763341_640.jpg",
        "https://plus.unsplash.com/premium_photo-1673641895483-2119e6d9fd75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YW5pbWFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        'https://cdn.pixabay.com/photo/2015/07/14/19/46/zebra-845266_640.jpg',
        "https://cdn.pixabay.com/photo/2022/10/22/03/35/elephant-7538331_640.jpg",
        "https://images.unsplash.com/photo-1497206365907-f5e630693df0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1547970810-dc1eac37d174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1536&q=80",
        "https://cdn.pixabay.com/photo/2015/11/16/16/28/bird-1045954_1280.jpg"
       
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="w-full mx-auto max-w-xl">
            <div className="w-full h-[300px]  ">
                <Slider {...settings}>
                    {" "}
                    {images.map((image, index) => (
                        <div key={index}>
                            <img
                                src={image}
                                alt={`Image ${index + 1}`}
                                className="w-full h-[250px] object-cover rounded-[7px] "
                            />
                        </div>
                    ))}{" "}
                </Slider>
            </div>
        </div>
    );
};

export default ImageCarousel;