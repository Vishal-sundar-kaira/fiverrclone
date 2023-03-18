import React from 'react'
import "./Gigs.scss"
import { gigs } from "../../data";
import GigCard from '../../Components/gigCard/GigCard';
const Gigs = () => {
  return (
    <div className='Gigs'>
          <div className="cards">
          {gigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
    </div>
  )
}

export default Gigs

  