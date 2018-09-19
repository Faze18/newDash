import React, { Component } from "react";
import Container from "../../components/Grid/Container";
import Links from "../../components/links";

class News extends Component {
    state = {

    };
    componentDidMount() {
        console.log("hello");
    }


    render() {
        return (
            <Container fluid>
                <h1>News Page</h1>
                <Links />
            </Container>
        ) 
    
}
}

    export default News;