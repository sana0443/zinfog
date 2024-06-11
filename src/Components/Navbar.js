import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Home.css'
import { useNavigate } from 'react-router-dom';

function Topbar() {

   const navigate=useNavigate()
    const handleLogin=()=>{
      navigate('/login')
    }

    const handleHome=()=>{
      navigate('/')
    }
 
 
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>               
          <img src='/Images/Logo.png'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              <img src='/Images/Logo.png'/>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-start flex-grow-1 pe-3">
              <p className='items'  onClick={handleHome} >
                Home
                <div className='span'></div>
              </p>
              <p href="#features" className='items' >
                 About
                <div className='span'></div>
              </p>
              <p href="#pricing" className='items' >
                Blog
                <div className='span'></div>
              </p>
              <p href="#pricing" className='items' >
                Get the app
                <div className='span'></div>
              </p>
              <p href="#pricing" className='items'>Add lab</p>
            </Nav>
            <div className=' items' style={{display:"flex"}}>

            <Nav className='justify-content-end flex-grow-1 pe-3' onClick={handleLogin} >
                Login/Signup
                </Nav>
                <img src='Images/Man.svg'  style={{width:"9%", alignSelf: "flex-start"}}/>

           
            </div>

          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
   </>
  );
}

export default Topbar;
