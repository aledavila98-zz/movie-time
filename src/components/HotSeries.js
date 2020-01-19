import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class HotSeries extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            series: []
        }
    }

    async componentDidMount()
    {
        this.setState({
            series:  await this.fetchHotSeries()
        });
    }

    fetchHotSeries = async () => {
        const [{data: response1}, {data: response2}, {data: response3}] = await Axios.all([
            Axios.get("http://www.omdbapi.com/?apikey=404f60e&t=mad+men"),
            Axios.get("http://www.omdbapi.com/?apikey=404f60e&t=game+of+thrones"),
            Axios.get("http://www.omdbapi.com/?apikey=404f60e&t=bojack+horseman")
        ]);
        return [response1, response2, response3];
    }

    displaySeries = () => {
        
        const titleStyle = {
            "color": "black"
        };
        const synopsisStyle = {
            "textAlign": "justify"
        };

        return this.state.series.map(series => {
            return <Carousel.Item>
                <Row>
                    <Col style={{"width": "30%"}}> <img className="d-block" src={series.Poster} alt="" /> </Col>
                    <Col style={{"width": "70%"}}>
                        <Carousel.Caption>
                            <Row>
                                <span style={titleStyle}> <h1> Hot Series </h1> </span>
                            </Row>
                            <Row>
                            <h3> {series.Title} </h3>
                            <p style={synopsisStyle}> <b>Synopsis:</b> {series.Plot} </p>
                            <p> <b>
                                { this.displayRatings(series.Ratings) }
                            </b> </p>
                            </Row>
                        </Carousel.Caption>
                    </Col>
                </Row>
            </Carousel.Item>;
        })
    }

    displayRatings = (ratings) => {
        return ratings.map(rating => { 
            return <span> {rating.Source} : {rating.Value} <br/> </span>;
        });
    }

    render() {
        return <Carousel style={{"width": "100%"}} className="bg-danger"> { this.displaySeries() } </Carousel>;
    }
}

export default HotSeries;