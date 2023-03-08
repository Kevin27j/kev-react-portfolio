import React from "react";
import "./ContactPage.css";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { IconContext } from "react-icons";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaBriefcase } from "react-icons/fa";

function ContactPage() {
    return (
        <section>
            <h1 className="contact-title">Contact Me</h1>
            <Container>
                <Row xs={1}>
                    <Col className="contact-section">
                        <h3 className="contact-subtitle">Say Hi</h3>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Your name" required />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control type="email" placeholder="Email" required />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control as="textarea" type="textarea" placeholder="Message" rows="4" required />
                            </Form.Group>

                            <Button variant="outline-success" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>

                    <Col className="contact-section">
                        <h3 className="contact-subtitle">Let's Connect</h3>
                        <ul className="contact-list">
                            <li>
                                <a href="https://github.com/Kevin27j" target={"_blank"} className="contact-link">
                                    <IconContext.Provider value={{ size: "2em" }}>
                                        <div>
                                            <FaGithub />
                                        </div>
                                    </IconContext.Provider>
                                    <h5>Github</h5>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/kejvin-pashaj-672023218/" target={"_blank"} className="contact-link">
                                    <IconContext.Provider value={{ size: "2em" }}>
                                        <div>
                                            <FaLinkedinIn />
                                        </div>
                                    </IconContext.Provider>
                                    <h5>Linkedin</h5>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:kevin.952011@gmail.com" target={"_blank"} className="contact-link">
                                    <IconContext.Provider value={{ size: "2em" }}>
                                        <div>
                                            <FaEnvelope />
                                        </div>
                                    </IconContext.Provider>
                                    <h5>Email</h5>
                                </a>
                            </li>
                            <li>
                                <a href="/" className="contact-link">
                                    <IconContext.Provider value={{ size: "2em" }}>
                                        <div>
                                            <FaBriefcase />
                                        </div>
                                    </IconContext.Provider>
                                    <h5>Resume</h5>
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ContactPage;