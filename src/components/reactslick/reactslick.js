import React, { Component } from "react";
import Slider from "react-slick";
import "./reactslick.css";
import Image from './components/image';

export default class ReactSlick extends Component {
    constructor(props) {
        super(props);
        this.images = props.images;
    }


    render() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2
        };
        return (
            <div className="container">
                <Slider {...settings}>
                  {this.images.map((image, i) => <Image source={image} key={`image-${i}`} />)}
                </Slider>
            </div>
        );
    }
}