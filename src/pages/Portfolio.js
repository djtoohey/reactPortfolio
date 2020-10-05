import React from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import Project from "../components/Project";
import projects from "../projects.json";


function Portfolio() {


    return (
        <Container fluid>
            <div className="body">
                <Row >
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>Portfolio</h1>
                            <a href={"https://djtoohey.github.io/assets/RESUME2020.pdf"} target="_blank" rel="noopener noreferrer" style={{ color: "#ffffff" }}>Resume (Click here!)</a>
                        </Jumbotron>
                    </Col>
                    <Col size="md-12">
                        {projects.map(project => (
                            <Project
                                name={project.name}
                                img={project.img}
                                repo={project.repo}
                                liveSite={project.liveSite}
                                liveSiteType={project.liveSiteType}
                            />
                        ))}
                    </Col>
                </Row>
            </div>
        </Container>
    );
}


export default Portfolio;
