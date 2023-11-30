import React from 'react'
import { ReactComponent as Logo } from '../logo.svg';
import { Button, Container, Navbar } from 'react-bootstrap';
import './component.css'

function Header() {
  return (
    <React.Fragment>
        <Navbar className="header">
        <Container>
          <Navbar.Brand href="#home" style={{fontSize:'1.5rem', color:'white'}}>
            <Logo style={{width:'2.8rem'}} />  {' '}
            APPNAME
          </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                
                <Button 
                  className="rounded-pill" 
                  variant="light">
                    <i class="fa-regular fa-circle-user me-2"></i>
                    <a href="#login">
                      Login
                    </a>
                </Button>{' '}
              </Navbar.Text>
            </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </React.Fragment>
  )
}

export default Header
