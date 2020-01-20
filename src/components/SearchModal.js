import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class SearchModal extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            modalIsVisible: props.modalIsVisible,
            modalInfo: props.modalInfo
        }

        this.hideModal = props.hideModal.bind(this);
    }

    componentWillReceiveProps(props) {
        this.setState({
            modalIsVisible: props.modalIsVisible,
            modalInfo: props.modalInfo
        })
    }
    
    render() {
        let {modalIsVisible, modalInfo} = this.state;
        const textStyle = {
            "fontSize": "18"
        };
        return <div>
            <Modal show={modalIsVisible} onHide={this.hideModal}>
                <Modal.Header closeButton>
                    <Modal.Title> {modalInfo.Title} </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="text-center">
                        <img src={modalInfo.Poster} alt="" />
                    </div>
                    <hr />
                    <Row>
                        <Col>
                            <div style={textStyle}>
                                <p> <b> Type: </b> {modalInfo.Type} </p>
                                <p> <b> Directed by: </b> {modalInfo.Director} </p>
                                <p> <b> Written by: </b> {modalInfo.Writer} </p>
                                <p> <b> Genre: </b> {modalInfo.Genre} </p>
                                <p> <b> Release: </b> {modalInfo.Released} </p>
                                <p> <b> Length: </b> {modalInfo.Runtime} </p>
                            </div>
                        </Col>
                        <Col>
                            <div style={textStyle}>
                                <p> <b> Cast: </b> {modalInfo.Actors} </p>
                                <p> <b> Plot: </b> {modalInfo.Plot} </p>
                                <p> <b> Rated: </b> {modalInfo.Rated} </p>
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <span style={{"fontSize": "20", "fontWeight": "800", "alignContent": "center"}}> Rating: {modalInfo.imdbRating} </span>
                </Modal.Footer>
            </Modal>
        </div>;
    }
    
}

export default SearchModal;