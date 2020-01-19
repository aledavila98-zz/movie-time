import React, { Component } from "react";
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Axios from "axios";

class TopBar extends Component {

    constructor(props) {
        super(props);
        this.searchInput = React.createRef();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        let title = this.searchInput.current.value;
        title = title.replace(/\s/g, "+");

        Axios.get("http://www.omdbapi.com/?apikey=404f60e&t=" + title).then(res => {
            console.log(res.data);
        });
    }

    render() {
        const topBarStyle = {
            display: "flex",
            width: "100%",
            boxSizing: "border-box"
        };

        return <div> 
        <NavBar bg="dark" variant="dark" expand="lg" style={topBarStyle}>
            <NavBar.Brand href="#">
                <b> Movie Time! </b>
            </NavBar.Brand>
            <NavBar.Collapse>
                <Nav className="mr-auto">
                </Nav>
                <Form inline>
                    <FormControl ref={this.searchInput} type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light" onClick={this.handleClick} >Search</Button>
                </Form>
            </NavBar.Collapse>
        </NavBar>
        </div>;
    }
}

export default TopBar;