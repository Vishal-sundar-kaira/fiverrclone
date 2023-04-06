import React, { useState,useEffect } from 'react'
import "./Orders.scss"
import { Link } from 'react-router-dom'
import message from "../../images/message.png"
import flag from "../../images/flag.png"
const Orders = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const currentUser={
    id:1,
    name:"vishal",
    isSeller:true
}
  return (
    <div className='Orders'>
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser?.isSeller?"Seller":"Buyer"}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img className='image' src={flag} alt="" />
            </td>
            <td>Karan</td>
            <td>88</td>
            <td>123</td>
            <td><img src={message} alt="" /></td>
            {/* delete */}
          </tr>
          <tr>
            <td>
              <img className='image' src={flag} alt="" />
            </td>
            <td>Nikshita</td>
            <td>88</td>
            <td>123</td>
            <td><img src={message} alt="" /></td>
            {/* delete */}
          </tr>
          <tr>
            <td>
              <img className='image' src={flag} alt="" />
            </td>
            <td>Sarah</td>
            <td>88</td>
            <td>123</td>
            <td><img src={message} alt="" /></td>
            {/* delete */}
          </tr>
          <tr>
            <td>
              <img className='image' src={flag} alt="" />
            </td>
            <td>Sajid</td>
            <td>88</td>
            <td>123</td>
            <td><img src={message} alt="" /></td>
            {/* delete */}
          </tr>
          <tr>
            <td>
              <img className='image' src={flag} alt="" />
            </td>
            <td>Rishi</td>
            <td>88</td>
            <td>123</td>
            <td><img src={message} alt="" /></td>
            {/* delete */}
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Orders
