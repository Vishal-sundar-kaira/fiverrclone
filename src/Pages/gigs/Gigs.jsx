import React, { useState } from 'react'
import "./Gigs.scss"
import { gigs } from "../../data";
import GigCard from '../../Components/gigCard/GigCard';
import down from "../../images/down.png"
const Gigs = () => {
  const [menu,setmenu]=useState(false)
  const [cat,setcat]=useState()
  const handleclick=()=>{
    if(menu==true){
      setmenu(false)
    }
    else{
      setmenu(true)
    }
  }
  return (
    <div className='Gigs'>
      <div className="container">
        <span className="breadcrumbs">FIVERR > GRAPHICS & DESIGN ></span>
        <span className='dark'>AI Artists</span>
        <span className='p'>Explore the Boundaries of art and technology with Fiverr's Ai Artists</span>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text" placeholder='min' />
            <input type="text" placeholder='max'/>
            <button>Apply</button>
          </div>
          <div className="right">
            <span className='sortby'>SortBy</span>
            <span className='bestsell'>Best Selling</span>
            <img src={down} alt="" onClick={handleclick}/>
            {menu==true?(<div className="rightmenu">
              <span>Newest</span>
              <span>Best Selling</span>
            </div>):""}
           
          </div>
        </div>
      </div>
          <div className="cards">
          {gigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
    </div>
  )
}

export default Gigs

  
  
