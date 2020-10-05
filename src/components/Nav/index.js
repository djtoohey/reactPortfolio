import React from "react";
import { Col, Row, Container } from "../Grid";
import "./App.css"

function Nav() {
    return (
        <nav>
            <Container>
                <Row>
                    <Col size="md-10">
                        <h4 className>
                            <a href="/" className="left">Declan Toohey</a>
                        </h4>
                    </Col>

                    <Col size="md-2">
                        <p>
                            <a href="/portfolio" className="right">Portfolio</a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </nav >
    );
}

export default Nav;
