import React from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import "./App.css";
function Main() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-6">
                    <Jumbotron>
                        <h1>Declan Toohey</h1>
                    </Jumbotron>

                </Col>
                <Col size="md-6">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis delectus hic, quidem, qui inventore tenetur sit magni aspernatur, at rerum atque cupiditate. Impedit reiciendis, voluptatum porro mollitia culpa illo eveniet omnis suscipit repellat minus, iusto ad, iste autem quis commodi magnam aperiam! Suscipit, consectetur voluptates.</p>
                </Col>
            </Row>
        </Container>
    );
}


export default Main;
