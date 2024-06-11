import React, { useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Home.css';
import StarIcon from '@mui/icons-material/Star';
import { Button, Col, Row } from 'react-bootstrap';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Card from './Card1';

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
        {
            name: 'Garuda',
            location: 'Oka, Delhi',
            packageName: 'Thyeroid Package',
            tests1: ['T3', 'T4', 'TSH'],
            price: 365,
            originalPrice: 1299,
            discount: '70%',
            reportTime: '1 Day'
        },
        {
            name: 'Garuda',
            location: 'Oka, Delhi',
            packageName: 'Thyeroid Package',
            tests1: ['T3', 'T4', 'TSH'],
            price: 365,
            originalPrice: 1299,
            discount: '70%',
            reportTime: '1 Day'
        },
        // Add more card data here
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    return (
        <>
        <p style={{textAlign:"start",marginTop:"40px",marginLeft:"30px"}}>Pick where you left off</p>
        <div className='carousel-div'>
            <div className='cards-container'>
                <OwlCarousel
                  
                    loop
                    items={6} // Adjusted items property
                    margin={2}
                    responsive={{
                        0: {
                            items: 1 // Number of items to show on small screens
                        },
                        915: {
                            items: 2 // Adjusted for medium screens
                        },
                        1024: {
                            items: 4 // Show the number of items in filteredMotorsList on large screens
                        }
                    }}
                >
                    {cards.slice(currentIndex, currentIndex + 4).map((card, index) => (
                        <Card key={index} {...card} />
                    ))}
                </OwlCarousel>
            </div>
            <div className='slider' onClick={handleNext}>
                <ArrowForwardIcon style={{ marginTop: "25px", cursor: "pointer", color: "#1c6ab7"}} />
            </div>
        </div>
        </>
    );
}

export default Carousel;
