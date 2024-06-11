import React from 'react'
import './Home.css'

import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import PlaceIcon from '@mui/icons-material/Place';
import SearchIcon from '@mui/icons-material/Search';

function Banner() {
  return (
    <div className='Banner-main'>
    <img src='Images/banner.png' alt='Banner'/>
    <div  className='Banner-text'>
    <h1>We have served more<br/> than 7000+ customers</h1>
    <p >Lorem ipsum dolor sit amet consectetur<br/> adipiscing elit mollis quisque senectus massa<br/> lobortis, scelerisque maecenas sagittis faucibus<br/> integer </p>
    </div>
    <div className="search-bar" style={{width:"90%"}}>
          <Row className="justify-content-start">
            <Col xs={12} md={12} lg={12}>
              <InputGroup>
              <InputGroup.Text className="location-section" style={{fontSize:"10px"}}><PlaceIcon style={{fontSize:"13px",color:"#0F52BA"}} /> Banglore</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Search..."
                  className="search-input"
                  style={{fontSize:"13px"}}

                />
                <SearchIcon style={{marginLeft:"-40px",zIndex:"9999",marginTop:'12px',color:"#0F52BA"}}/>

              </InputGroup>
            </Col>
          </Row>
      </div>

      

  </div>
  )
}

export default Banner
