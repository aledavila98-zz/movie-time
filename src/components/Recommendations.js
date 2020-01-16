import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

class Recommendations extends Component {
    
    render() {
        return <div>
            <CardDeck>
                <Card>
                    <Card.Header>
                        Featured this week!
                    </Card.Header>
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