import React, { Component } from "react";
import Slider from "react-slick";
import "./reactslick.css";
import Image from './components/image';

export default class ReactSlick extends Component {
    constructor(props) {
        super(props);
        this.images = props.images;
    }

    createImage(image) {
        return <Image source={image} key={image} />;
    }

    createImages(images){
        return images.map(this.createImage);
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
                    {/*<div>*/}
                        {/*<img src="http://placekitten.com/g/400/200" />*/}
                    {/*</div>*/}
                    {/*<div>*/}
                        {/*<img src="http://placekitten.com/g/400/200" />*/}
                    {/*</div>*/}
                    {/*<div>*/}
                        {/*<img src="http://placekitten.com/g/400/200" />*/}
                    {/*</div>*/}
                    {/*<div>*/}
                        {/*<img src="http://placekitten.com/g/400/200" />*/}
                    {/*</div>*/}
                    {this.createImages(this.images)}
                </Slider>
            </div>
        );
    }
}