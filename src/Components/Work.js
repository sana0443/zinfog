import React from 'react'
import './Home.css'
import { Col, Row } from 'react-bootstrap'

function Work() {
  return (
    <div className="how-we-work">
    <h2>How we work</h2>
    <div className="steps">
       <Row>
        <Col xs={12} md={12} lg={4}>
            <img src='/Images/round1.png' style={{width:"70%"}}/>
        </Col>
        <Col xs={12} md={12} lg={4}>
        <img src='/Images/round2.png'style={{width:"80%"}}/>
  
        </Col>
        <Col xs={12} md={12} lg={4}>
        <img src='/Images/round3.png'style={{width:"60%",marginLeft:"-80px"}}/>
 
        </Col>
       </Row>
    </div>
</div>
  )
}

export default Work
