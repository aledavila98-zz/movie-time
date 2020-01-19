import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
import { faFire } from "@fortawesome/free-solid-svg-icons/faFire";
import { faHistory } from "@fortawesome/free-solid-svg-icons/faHistory";
import Axios from "axios";

class Recommendations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            featured: {},
            trending: {},
            classic:  {}
        }
    }

    async componentDidMount () {
        this.setState({
            featured: await this.fetchFeatured(),
            trending: await this.fetchTrending(),
            classic: await this.fetchClassic()
        });
    }

    fetchFeatured = async () => {
        const {data: response} = await Axios.get("http://www.omdbapi.com/?apikey=404f60e&t=avengers");
        return response;
    }

    fetchTrending = async () => {
        const {data: response} = await Axios.get("http://www.omdbapi.com/?apikey=404f60e&t=parasite");
        return response;
    }

    fetchClassic = async () => {
        const {data: response} = await Axios.get("http://www.omdbapi.com/?apikey=404f60e&t=a+clockwork+orange");
        return response;
    }
    
    render() {
        const {featured, trending, classic} = this.state;
        const cardStyle = {
            "height": "100%",
            "width": "auto" 
        };

        console.log(featured)
        return <div>
            <CardDeck>
                <Card bg="dark" text="white" border="light" style={cardStyle}>
                    <Card.Img height="70%" width="auto" src={featured.Poster} alt="" variant="top" />
                    <Card.Body>
                        <Card.Title>
                            <FontAwesomeIcon icon={faStar} />
                            <hr /> 
                            <h5> Featured this week! </h5>
                        </Card.Title>
                        <a href="https://www.youtube.com/watch?v=eOrNdBpGMv8">
                            <h3> {featured.Title} </h3> 
                        </a>
                    </Card.Body>
                </Card>
                <Card bg="dark" text="white" border="light" style={cardStyle}>
                    <Card.Img height="70%" width="auto" src={trending.Poster} alt="" variant="top" />
                    <Card.Body>
                        <Card.Title>
                            <FontAwesomeIcon icon={faFire} />
                            <hr />
                            <h5> Trending </h5>
                        </Card.Title>
                        <a href="https://www.youtube.com/watch?v=SEUXfv87Wpk">
                            <h3> {trending.Title} </h3> 
                        </a>
                    </Card.Body>
                </Card>
                <Card bg="dark" text="white" border="light" style={cardStyle}>
                    <Card.Img height="70%" width="auto" src={classic.Poster} alt="" variant="top" />
                    <Card.Body>
                        <Card.Title>
                            <FontAwesomeIcon icon={faHistory} />
                            <hr />
                            <h5> Classic of the Week </h5>
                        </Card.Title>
                        <a href="https://www.youtube.com/watch?v=SPRzm8ibDQ8">
                            <h3> {classic.Title} </h3> 
                        </a>
                    </Card.Body>
                </Card>
            </CardDeck>
        </div>;
    }

}

export default Recommendations;