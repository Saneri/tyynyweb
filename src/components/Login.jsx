import React, { Component } from 'react';
import { Container, Form } from 'react-bootstrap';

class Login extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Form>
          <Form.Group controlId="formUsername">
            <Form.Control type="text" placeholder="username" />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Control type="password" placeholder="password" />
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

export default Login;
