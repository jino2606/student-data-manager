import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Button } from "react-bootstrap";

function Navigationbar({component, drawerType, setIsPermanent, isMobile}) {
  const [showArrow, setShowArrow] = useState(false)
  const changeDrawerVariant = (e)=>{
		setIsPermanent(!drawerType)
	}

  useEffect(()=>{
    isMobile && drawerType ? setShowArrow(true) : setShowArrow(false)
  }, [isMobile])

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      {
        showArrow?(
          isMobile ?
          <button className="border-0" onClick={(e)=>changeDrawerVariant(e)}><i class="fa-solid fa-angles-left"></i></button>:
          <button className="border-0" onClick={(e)=>changeDrawerVariant(e)}><i class="fa-solid fa-angles-right"></i></button>
        ):<></>
        
      }

      <Container>
      {/* <div className=""> */}
      <Navbar.Brand href="#home">
        <Breadcrumb className="mb-0" style={{margin:'0'}}>
          <Breadcrumb.Item>Pages</Breadcrumb.Item>
          <Breadcrumb.Item>
            {component}
          </Breadcrumb.Item>
          {/* <Breadcrumb.Item active>Data</Breadcrumb.Item> */}
        </Breadcrumb>
        {component}
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">
              <i class="fa fa-user me-sm-1" aria-hidden="true"></i>
              <span class="d-sm-inline d-none">Sign In</span>
            </Nav.Link>
            <Nav.Link href="#link">
                <i
                class="fa fa-cog fixed-plugin-button-nav cursor-pointer"
                aria-hidden="true"
              ></i>
            </Nav.Link>
            <Nav.Link href="#link">
              <i class="fa fa-bell cursor-pointer" aria-hidden="true"></i>
            </Nav.Link>
            {/* <NavDropdown id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      {/* </div>   */}
      </Container>
      
    </Navbar>
  );
}

export default Navigationbar;
