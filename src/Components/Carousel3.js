import React from 'react'
import RestoreIcon from '@mui/icons-material/Restore';

function Carousel3({name,sub,time}) {
  return (
    <div className='card2'>
        <img src='/Images/Rect.png'/>
        <h6>What we can learn today</h6>
        <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
        <div style={{ display: 'flex', alignItems: 'center',marginTop:"-30px" }}>
    <RestoreIcon style={{ color: 'gray', fontSize: '15px',marginLeft:"20px",marginTop:"10px" }} />
    <p style={{ color: 'gray', fontSize: '12px',marginTop:"24px",marginLeft:"5px" }}>30 mins ago</p>
</div>
    </div>
  )
}

export default Carousel3
