import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'

export default function Contacts() {
    return (
        <Container className='contact-us mt-5'>
            <h1>Contacts Us</h1>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>E-mail:</Form.Label>
                    <Form.Control className="contacts-input" type="email" placeholder="Введите email" />
                    <Form.Text>
                        We will keep the entered data confidential.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className='mb-4'>
                    <Form.Label>Message:</Form.Label>
                    <Form.Control className="contacts-input" as="textarea" placeholder="Введите текст" rows="5" />
                </Form.Group>
                <Button variant="danger" type="submit">Send</Button>
            </Form>

        </Container>
    )
}
