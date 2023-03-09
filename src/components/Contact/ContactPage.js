import React from "react";
import "./ContactPage.css";
import DownloadResume from "../../DownloadResume";
import { Container, Col, Row, Button, Form } from 'react-bootstrap';
import { IconContext } from "react-icons";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaBriefcase } from "react-icons/fa";

function ContactPage() {
    return (
        <section>
            <h1 className="contact-title">Contact Me</h1>
            <Container>
                <Row xs={1} md={1} lg={2}>
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
                                <div className="contact-element">
                                    <IconContext.Provider value={{ size: "2em" }}>
                                        <FaGithub />
                                    </IconContext.Provider>
                                    <a href="https://github.com/Kevin27j" target={"_blank"} rel="noreferrer" className="contact-link">
                                        <h4>Github</h4>
                                    </a>
                                </div>
                            </li>

                            <li>
                                <div className="contact-element">
                                    <IconContext.Provider value={{ size: "2em" }}>
                                        <div>
                                            <FaLinkedinIn />
                                        </div>
                                    </IconContext.Provider>
                                    <a href="https://www.linkedin.com/in/kejvin-pashaj-672023218/" target={"_blank"} rel="noreferrer" className="contact-link">
                                        <h4>Linkedin</h4>
                                    </a>
                                </div>
                            </li>

                            <li>
                                <div className="contact-element">
                                    <IconContext.Provider value={{ size: "2em" }}>
                                        <div>
                                            <FaEnvelope />
                                        </div>
                                    </IconContext.Provider>
                                    <a href="mailto:kevin.952011@gmail.com" target={"_blank"} rel="noreferrer" className="contact-link">
                                        <h4>Email</h4>
                                    </a>
                                </div>
                            </li>

                            <li>
                                <div className="contact-element">
                                    <IconContext.Provider value={{ size: "2em" }}>
                                        <div>
                                            <FaBriefcase />
                                        </div>
                                    </IconContext.Provider>
                                    <a onClick={DownloadResume} className="contact-link">
                                        <h4>Resume</h4>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ContactPage;