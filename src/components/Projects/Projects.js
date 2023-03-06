import React from "react";
import "./projects.css"
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Project from "./Project";
import projectData from "../../projects-data.json";

function Projects() {
    return (
        <div className="projects">
            <Container>
                <h1 className="projects-title">Projects</h1>
                <div className="projects-container">
                    <Row xs={1} md={1} lg={3} className="g-4">
                        <Col>
                            {projectData.map(data => <Project
                                name={data.name}
                                info={data.info}
                                image={data.image}
                                github={data.github}
                                deployed={data.deployed}
                            />)}
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}


// function Projects() {
//     return (
//         <div className="projects">
//             <Container>
//                 <h1 className="projects-title">Projects</h1>
//                 <div className="projects-container">
//                     <Row xs={1} md={2} className="g-4">
//                         {Array.from({ length: 6 }).map((_, idx) => (
//                             <Col>
//                             <Project 
//                             name={projectData.name}
//                             info={projectData.info}
//                             image={projectData.image}
//                             github={projectData.github}
//                             deployed={projectData.deployed}
//                             />
//                             </Col>
//                         ))}
//                     </Row>
//                 </div>
//             </Container>
//         </div>
//     )
// }

export default Projects