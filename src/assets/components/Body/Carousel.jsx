// import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className + ' w-11 h-[5rem] flex justify-center items-center bg-pink-900 rounded-md hover:bg-pink-950'}
        style={{ ...style, display: "flex", marginLeft: '10rem' }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className + ' w-11 h-[5rem] flex justify-center items-center bg-pink-900 rounded-md  hover:bg-pink-950'}
        style={{ ...style, display: "flex"}}
        onClick={onClick}
      />
    );
  }
const Carousel = (props) => {
    let settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
       
        // Remove the duplicate key 'speed'
        // speed: 1000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="w-[93vw] m-auto">
            <Slider {...settings}>
                {props.imagePath.map((item) => {
                    return <div key={item.id} className="">
                        <img src={item.path} alt="imgs" className="object-contain m-auto w-full" />
                    </div>
                })}
            </Slider>
        </div>
    )
}


export default Carousel;