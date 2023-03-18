import React from 'react'
import "./GigCard.scss"
import gig1 from "../../images/gig1.jpg"
import sample from "../../images/newimg.webp"
import heart from "../../images/heart.png"
import star from "../../images/star.png"
import gigimg from "../../images/gigimg.webp"
import { Link } from 'react-router-dom'
const GigCard = ({item}) => {
  return (
                <Link className='link' to="/gig/123">
                <div className="maincard">
                    <img src={item.img} alt="" />
                    <div className="name">
                        <img src={item.pp} alt="" />
                        <h2>arpitdk123</h2>
                    </div>
                    <p>{item.desc}</p>
                    <div className="star">
                        <img src={star} alt="" />
                        <h2>{item.star}</h2>
                    </div>
                    <hr/>
                    <div className="status">
                        <img src={heart} alt="" />
                        <div className="price">
                            <h2>Starting At</h2>
                            <h1>{item.price}</h1>
                        </div>
                    </div>
                </div>
                </Link>
  )
}

export default GigCard
