import React, { useState,useEffect } from 'react'
import "./Messages.scss"
import { Link } from 'react-router-dom'
import message from "../../images/message.png"
import flag from "../../images/flag.png"
const Messages = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const currentUser={
    id:1,
    name:"vishal",
    isSeller:true
}
const message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit veritatis sed dolores quis iure ratione beatae dolorem" 
  return (
    <div className='Messages'>
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className='active'>
            <td>
              <h3>Vishal</h3>
            </td>
            <td><Link to="/message/123"className='link'>{message.substring(0,80)}....</Link></td>
            <td>1 day ago</td>
            <td><button>Mark as read</button></td>
            {/* delete */}
          </tr>
          <tr className='active'>
            <td>
              <h3>Vishal</h3>
            </td>
            <td><Link to="/message/123"className='link'>{message.substring(0,80)}....</Link></td>
            <td>1 day ago</td>
            <td><button>Mark as read</button></td>
            {/* delete */}
          </tr>
          <tr>
            <td>
              <h3>Vishal</h3>
            </td>
            <td><Link to="/message/123"className='link'>{message.substring(0,80)}....</Link></td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>
              <h3>Vishal</h3>
            </td>
            <td><Link to="/message/123"className='link'>{message.substring(0,80)}....</Link></td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>
              <h3>Vishal</h3>
            </td>
            <td><Link to="/message/123"className='link'>{message.substring(0,80)}....</Link></td>
            <td>1 day ago</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Messages
