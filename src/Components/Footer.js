import React from 'react'
import { Col, Row } from 'react-bootstrap'
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import PlaceIcon from '@mui/icons-material/Place';

function Footer() {
  return (
    <div className='footer-main'>

    <Row style={{marginTop:"40px"}}>
    <Col xs={6} md={3}>
        <img src='/Images/Logo.png' style={{width:"40%"}}/>
        <p style={{marginTop:'20px'}}>Lorem ipsum dolor sit amet <br/> consectetur adipiscing elit aliquam</p>
        <img src='/Images/Social.png' style={{width:"40%"}}/>

    </Col>
    <Col xs={6} md={3}>
        <h6>Cities</h6>
        <p>Banglore</p>
        <p>Delhi</p>
        <p>Noida</p>
        <p>Hyderabad</p>
    </Col>
    <Col xs={6} md={3}>
    <h6>Support</h6>
        <p>Getting started</p>
        <p>Help centre</p>
        <p>Report a bug</p>
        <p>Refund policy</p>
        <p>Call support</p>
    </Col>
    <Col xs={6} md={3}>
    <h6>Contact us</h6>
        <p> <MailIcon style={{fontSize:"small",color:"#1c6ab7"}}/> info@acceslabz</p>
        <p> <CallIcon style={{fontSize:"small",color:"#1c6ab7"}}/>(+91) 928800880</p>
        <p> <PlaceIcon style={{fontSize:"small"}}/>Door No. 28/69/1,
Patturaikkal, Thrissur, Kerala 680008, India</p>
       
    </Col>
    </Row>
      
    </div>
  )
}

export default Footer
