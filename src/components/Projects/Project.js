import React from "react";
import "./project.css"
import Card from 'react-bootstrap/Card';

function Project(props) {
    return (
        <Card>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.info}
                    {props.github}
                    {props.deployed}
                </Card.Text>
            </Card.Body>
        </Card>

    )
}

export default Project;