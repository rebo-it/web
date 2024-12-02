import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';

function Header() {
  return (
    <Navbar  className="bg-body-tertiary" style={{backgroundColor:'pink', height:'3rem'}}>
      <Container>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://api.whatsapp.com/send/?phone=5215561585215&text&type=phone_number&app_absent=0ontacto"> 
              <i className="bi bi-whatsapp"></i> 5215561585215 
            </Nav.Link>

            <Nav.Link href="mailto:contacto@rebo.mx"> 
              <i className="bi bi-envelope"></i> contacto@rebo.mx
            </Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;