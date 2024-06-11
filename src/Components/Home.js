import React from 'react'
import Banner from './Banner'
import { Navbar } from 'react-bootstrap'
import Topbar from './Navbar'
import Labs from './Populars'
import Work from './Work'
import Footer from './Footer'
import Carousel from './Carousel'
import Carousel2 from './Carousel2'
import Carousel3 from './Carousel3'
import ImageSlider from './ImageSlider'

function Home() {
  return (
    <div>
        {/* <Topbar/> */}
      <Banner/>
      <Labs/>
      <Work/>
      <Carousel/>
      <Carousel2/>
      <Carousel/>
      <ImageSlider/>

 

      <Footer/>
      
    </div>
  )
}

export default Home
