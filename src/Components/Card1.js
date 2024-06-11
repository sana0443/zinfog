import React from 'react';
import './Home.css';
import StarIcon from '@mui/icons-material/Star';
import { Button, Col, Row } from 'react-bootstrap';

const Card = ({ name, location, packageName, tests,tests1, price, originalPrice, discount, reportTime }) => {
    return (
        <div className='card'>
            <div className='card-sec1'>
                <div className='card-p'>
                    <p style={{marginTop: "10px"}}>{name}</p>
                    <p style={{color: "gray", marginTop: "-25px"}}>{location}</p>
                </div>
                <div className='rating'>
                    <p>4.3 <StarIcon style={{color:"white",fontSize:"small"}}/></p>
                </div>
            </div>
            <div className='card-sec2'>
                <h6>{packageName}</h6>
               
                <p style={{ marginTop: "-30px" }}>
    {(tests1 ?? []).length > 0 ? `(${tests1.join(', ')})` : ''}
</p>                 
<br/>
{tests && tests.length > 0 && tests.map((test, index) => (
    <p key={index} style={{ marginTop: "-32px" }}>{test}</p>
))}      <Row>
                    <Col xs={6}>
                        <h5>{price}/- <span className='cross'>{originalPrice}/-</span></h5>
                        <div className='offer'>
                            <p style={{fontSize:"8px",fontWeight:"600",marginTop:"-8px",color:"rgb(67, 108, 6)"}}>{discount} off</p>
                        </div>
                    </Col>
                    <Col xs={6}>
                        <p style={{fontSize:"10px",color:"#1c6ab7",fontWeight:"600"}}>Expected report in {reportTime}</p>
                        <Button style={{width:"100px",marginTop:"-30px", backgroundColor: "#1c6ab7"}}>Book</Button>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Card;