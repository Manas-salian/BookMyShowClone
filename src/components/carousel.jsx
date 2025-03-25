import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function CarouselComponent() {
    const imageStyle = {
        height: '400px',  // Set fixed height
        objectFit: 'cover'  // Maintain aspect ratio and cover container
    };

    return (
        <Carousel>
            <Carousel.Item>
                <img
                    class="d-block w-100 rounded-3"
                    style={imageStyle}
                    src="https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1742876499017_1240x300travisscott2025regionalnewdelhipresale.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    class="d-block w-100 rounded-3"
                    style={imageStyle}
                    src="https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1726036566435_playcardnewweb.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    class="d-block w-100 rounded-3"
                    style={imageStyle}
                    src="https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1742803355865_anoraweb.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselComponent;