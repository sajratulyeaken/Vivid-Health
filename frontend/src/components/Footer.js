import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container className='mb-5'>
        <Row>
          <Col className='text-center py-3'>
            Copyright &copy; Vivid Health
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;