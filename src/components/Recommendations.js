import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Axios from "axios";

class Recommendations extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        console.log(personalRecommendation)
        return <div>
            <CardDeck>
                <Card>
                    <Card.Header>
                        Featured this week!
                    </Card.Header>
                    <Card.Body>
                        Title: {personalRecommendation.Title}
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>
                        My personal recomendation
                    </Card.Header>
                </Card>
                <Card>
                    <Card.Header>
                        FYI
                    </Card.Header>
                </Card>
            </CardDeck>
        </div>;
    }

}

export default Recommendations;