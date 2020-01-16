import React, { Component } from "react";
import TopBar from "./TopBar";
import Content from "./Content";

class Main extends Component {

    render () {
        return <div>
            <TopBar />
            <Content />
        </div>;
    }
    
}

export default Main;