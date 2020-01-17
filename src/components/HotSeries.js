import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

class HotSeries extends Component {
    render() {
        return <div>
            <Carousel>
                <Carousel.Item>
                    <h2>Hola</h2>
                </Carousel.Item>
                <Carousel.Item>
                    <h2>Adios</h2>
                </Carousel.Item>
            </Carousel>
        </div>;
    }
}

export default HotSeries;