import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Axios from "axios";

class HotSeries extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            series1: {},
            series2: {},
            series3: {}
        }
    }

    async componentDidMount()
    {
        const seriesResponse = await this.fetchHotSeries();
        this.setState({
            series1: seriesResponse.response1,
            series2: seriesResponse.response2,
            series3: seriesResponse.response3
        });
    }

    fetchHotSeries = async () => {
        const [{data: response1}, {data: response2}, {data: response3}] = await Axios.all([
            Axios.get("http://www.omdbapi.com/?apikey=404f60e&t=mad+men"),
            Axios.get("http://www.omdbapi.com/?apikey=404f60e&t=game+of+thrones"),
            Axios.get("http://www.omdbapi.com/?apikey=404f60e&t=bojack+horseman")
        ]);
        return {response1, response2, response3};
    }


    render() {
        const {series1, series2, series3} = this.state;
        return <div>
            <Carousel>
                <Carousel.Item>
                    <h2>{series1.Title}</h2>
                </Carousel.Item>
                <Carousel.Item>
                    <h2>{series2.Title}</h2>
                </Carousel.Item>
                <Carousel.Item>
                    <h2>{series3.Title}</h2>
                </Carousel.Item>
            </Carousel>
        </div>;
    }
}

export default HotSeries;