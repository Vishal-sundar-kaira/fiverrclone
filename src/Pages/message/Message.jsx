import React, { useState,useEffect } from 'react'
import "./Message.scss"
import { Link } from 'react-router-dom'
import profile from "../../images/profile.webp"
import projimg from "../../images/projimg.webp"

const Message = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='Message'>
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/messages">MESSAGES</Link>>Vishal Kaira>
        </span>
        <div className="messages">
          <div className="mess">
            <img src={profile} alt="" />
            <div className="chat">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum doloremque omnis minima, quo est nihil. Explicabo adipisci provident voluptates hic incidunt et mollitia placeat. Deserunt eum impedit doloremque modi cupiditate.</p>
            </div>
          </div>
          <div className="mess owner">
            <img src={projimg} alt="" />
            <div className="chat">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum doloremque omnis minima, quo est nihil. Explicabo adipisci provident voluptates hic incidunt et mollitia placeat. Deserunt eum impedit doloremque modi cupiditate.</p>
            </div>
          </div>
          <div className="mess">
            <img src={profile} alt="" />
            <div className="chat">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum doloremque omnis minima, quo est nihil. Explicabo adipisci provident voluptates hic incidunt et mollitia placeat. Deserunt eum impedit doloremque modi cupiditate.</p>
            </div>
          </div>
          <div className="mess owner">
            <img src={projimg} alt="" />
            <div className="chat">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum doloremque omnis minima, quo est nihil. Explicabo adipisci provident voluptates hic incidunt et mollitia placeat. Deserunt eum impedit doloremque modi cupiditate.</p>
            </div>
          </div>
          <div className="mess">
            <img src={profile} alt="" />
            <div className="chat">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum doloremque omnis minima, quo est nihil. Explicabo adipisci provident voluptates hic incidunt et mollitia placeat. Deserunt eum impedit doloremque modi cupiditate.</p>
            </div>
          </div>
          <div className="mess owner">
            <img src={projimg} alt="" />
            <div className="chat">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum doloremque omnis minima, quo est nihil. Explicabo adipisci provident voluptates hic incidunt et mollitia placeat. Deserunt eum impedit doloremque modi cupiditate.</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="write">
          <textarea name="" id="" cols="30" rows="10" placeholder='Write your message'></textarea>
          <button>send</button>
        </div>
      </div>
    </div>
  )
}

export default Message
