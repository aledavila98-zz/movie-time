import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Axios from "axios";

class Recommendations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            featured: {},
            personalRecommendation: {},
            fyi: {}
        }
    }

    async componentDidMount () {
        this.setState({
            personalRecommendation: await this.fetchPersonalRecommendation()
        });
    }

    fetchPersonalRecommendation = async () => {
        const {data: response} = await Axios.get("http://www.omdbapi.com/?apikey=404f60e&t=avengers");
        return response;
    }
    
    render() {
        const {personalRecommendation} = this.state;
        const cardStyle = {
            "height": "100%",
            "width": "auto"
        };

        const imgStyle={
            "max-height": "200",
            "max-width": "auto"
        }

        console.log(personalRecommendation)
        return <div>
            <CardDeck>
                <Card bg="dark" text="white" border="light" style={cardStyle} >
                    <Card.Img height="70%" width="auto" src={personalRecommendation.Poster} alt="" variant="top" />
                    <Card.Body>
                        <Card.Title>
                            <h5> Featured this week! </h5>
                        </Card.Title>
                        <a href="https://www.youtube.com/watch?v=eOrNdBpGMv8">
                            <h3> {personalRecommendation.Title} </h3> 
                        </a>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Title>
                        My personal recomendation
                    </Card.Title>
                </Card>
                <Card>
                    <Card.Title>
                        FYI
                    </Card.Title>
                </Card>
            </CardDeck>
        </div>;
    }

}

export default Recommendations;