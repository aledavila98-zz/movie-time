import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Recommendations from "./Recommendations";
import HotSeries from "./HotSeries";

class Content extends Component {

    render() {
        return <div>
            <Container>
                <Row>
                    <Col> <Recommendations /> </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col> <HotSeries /> </Col>
                </Row>
            </Container>
        </div>;
    }

}

export default Content;