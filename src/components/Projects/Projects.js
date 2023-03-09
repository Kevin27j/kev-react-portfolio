import React from "react";
import "./Projects.css"
import { Container, Col, Row } from 'react-bootstrap';

import Project from "./Project";
import projectData from "../../projects-data.json";

function Projects() {
    return (
        <Container>
            <h1 className="projects-title">Projects</h1>
            <div className="projects-container">
                <Row xs={1} md={1} lg={3} className="g-4">
                    {projectData.map((data, i) => (
                        <Col>
                            <Project
                                key={i}
                                name={data.name}
                                info={data.info}
                                image={data.image}
                                github={data.github}
                                deployed={data.deployed}
                            />
                        </Col>
                    ))}
                </Row>
            </div>
        </Container>
    );
}

export default Projects