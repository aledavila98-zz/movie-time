import React, { Component } from "react";
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

class TopBar extends Component {

    render() {
        const topBarStyle = {
            position: "fixed",
            display: "flex",
            width: "100%",
            boxSizing: "border-box"
        };

        return <NavBar bg="dark" variant="dark" expand="lg" style={topBarStyle}>
            <NavBar.Brand href="#">
                <b> Movie Time! </b>
            </NavBar.Brand>
            <NavBar.Collapse>
                <Nav className="mr-auto">
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-secondary">Search</Button>
                </Form>
            </NavBar.Collapse>
        </NavBar>;
    }
}

export default TopBar;