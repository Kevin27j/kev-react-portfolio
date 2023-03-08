import React from "react";
import "./ContactPage.css";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ContactPage() {
    return (
        <section>
            <h1 className="contact-title">Contact Me</h1>
            <Container>
                <Row xs={1}>
                    <Col id="contact-form">
                    <h3>Say Hi</h3>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Your name" required/>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control type="email" placeholder="Email" required />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control as="textarea" type="textarea" placeholder="Message" rows="4" required/>
                            </Form.Group>

                            <Button variant="outline-success" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>

                    <Col>
                        
                    </Col>
                </Row>
            </Container>
        </section>

    )
    // return (
    //     <section className="form-container">
    //         <h1 className="contact-title">Contact Me</h1>
    //         <Container>
    //             <Row>
    //                 <Col>
    //                     <form className="form">
    //                         <h3>Say hi</h3>

    //                         <label for="name">Name</label>
    //                         <input type="text" name="name" />

    //                         <label for="email">Email</label>
    //                         <input type="text" name="email" />

    //                         <label for="message">Message</label>
    //                         <input type="text" name="message" />
    //                     </form>

    //                 </Col>
    //                 <Col>

    //                 </Col>
    //             </Row>
    //         </Container>
    //     </section>
    // )
}

export default ContactPage;