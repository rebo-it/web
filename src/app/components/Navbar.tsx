import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css";
import { Button, NavbarCollapse } from 'react-bootstrap';


function Header() {
  return (
    <Container className='Navbar' style={{minWidth:'none'}}>
      <Navbar className="NavTop justify-content-center" >
        <Container  className='w-100 m-0 p-0' style={{minWidth:'none'}}>
          <Navbar.Collapse id="basic-navbar-nav">
          
            <Nav className="h-100 w-100 d-flex justify-content-between align-items-center">
              
              <div className="d-flex gap-3">
                <Nav.Link 
                  href="https://api.whatsapp.com/send/?phone=5215561585215&text&type=phone_number&app_absent=0" 
                  target="_blank"
                  className='TopLink'
                  active={false}
                >
                  <i className="bi bi-whatsapp"></i> 5215561585215
                </Nav.Link>
                <Nav.Link 
                  href="mailto:contacto@rebo.mx" 
                  target="_blank"
                  className='TopLink'
                >
                  <i className="bi bi-envelope"></i> contacto@rebo.mx
                </Nav.Link>
              </div>

              <Nav.Link 
                href="https://www.google.com/maps/place/El+Rosario/@19.5046653,-99.2000975,15z/data=!4m2!3m1!1s0x0:0x8a95c0f781b015f2?sa=X&ved=1t:2428&ictx=111" 
                target="_blank"
                className='TopLink d-none d-md-block'
              >
                <i className="bi bi-geo-alt"></i> Ubicación Física
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar className='NavBottom w-100' style={{minWidth:'none'}}>
        <NavbarCollapse id="basic-navbar-nav">
          <Button
            href='/web'
          >
            INICIO
          </Button>
          <Button>
            NOSOTROS
          </Button>
          <Button>
            PRODUCTOS +
          </Button>
          <Button>
            FAQS
          </Button>
          <Button
            href='/web/contacto'
          >
            CONTACTO
          </Button>
       

        </NavbarCollapse>



      </Navbar>
    </Container>
  );
}

export default Header;