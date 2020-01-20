import React, { Component } from "react";
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import SearchModal from "./SearchModal";
import Axios from "axios";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const swal = withReactContent(Swal);

const showError = () => {
    const Toast = swal.mixin({
        toast: true,
        position: 'top-end',
        timer: 3000,
    });
      
    Toast.fire({
        icon: 'error',
        title: 'Your title was not found :('
    });
}

class TopBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalIsVisible: false,
            modalInfo: {}
        };

        this.searchInput = React.createRef();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        let title = this.searchInput.current.value;
        title = title.replace(/\s/g, "+");

        Axios.get("http://www.omdbapi.com/?apikey=404f60e&t=" + title).then(res => {
            if (res.data.Error) {
                showError();
            } else {
                this.sendInfoModal(res.data);
            }
        }).catch(ex => {
            showError();
        });
    }

    sendInfoModal(info) {
        this.setState({
            modalIsVisible: true,
            modalInfo: info
        });
    }

    hideModal() {
        this.setState({
            modalIsVisible: false,
            modalInfo: {}
        });
    }

    render() {
        const topBarStyle = {
            display: "flex",
            width: "100%",
            boxSizing: "border-box"
        };
        const {modalIsVisible, modalInfo} = this.state;

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
            <SearchModal modalIsVisible={modalIsVisible} modalInfo={modalInfo} hideModal={this.hideModal} />
        </div>;
    }
}

export default TopBar;