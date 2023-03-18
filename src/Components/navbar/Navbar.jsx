import React, { useEffect, useState } from 'react'
import "../navbar/Navbar.scss";
import { Link, useLocation } from 'react-router-dom';
import userimg from '../navbar/apple.jpg'
const Navbar = () => {
    const [active,setactive]=useState(false)
    const [option,setoption]=useState(false)
    const isactive=()=>{
        window.scrollY>0?setactive(true):setactive(false)
    }
    useEffect(()=>{
        window.addEventListener("scroll",isactive)
        return ()=>{
            window.removeEventListener("scroll",isactive)
        }
    },[])
    const {pathname}=useLocation()
    const currentUser={
        id:1,
        name:"vishal",
        isSeller:true
    }
    const activateoption=()=>{
        if(option===true)setoption(false)
        else setoption(true)
    }
  return (
    <>
      {/* use span tag for one after other in row like specally in navbar */}
      <div className={active|| pathname!=="/"?"navbar active":"navbar"}>
        <div className="container">
            <div className="logo">
                <Link className='text' to="/"><span>fiverr</span></Link>
                <span className='dot'>.</span>
            </div>
            <div className="links">
                <span>Fiverr Business</span>
                <span>Explore</span>
                <span>English</span>
                {!currentUser?.isSeller && <span>Become a seller</span>}
                <span>Sign in</span>
                {!currentUser &&< button className={active?"joinbut active":"joinbut"}>Join</button>}
                {currentUser && (
                    <div className="user">
                        <img src={userimg} alt="" />
                        <span onClick={activateoption}>{currentUser?.name}</span>
                        {option&&<div className="options">
                            {
                                currentUser?.isSeller && (
                                    <>
                                    <Link to="gigs" className='links'>Gigs</Link>
                                    <Link to="add" className='links'>Add new Gigs</Link>
                                    </>
                                )
                                
                            }
                            <Link to="orders" className='links'>Orders</Link>
                            <Link to="messages" className='links'>Messages</Link>
                            <Link to="logout" className='links'>Log out</Link>
                        </div>}
                    </div>
                )}
            </div>
        </div>
        
        {active||pathname!=="/"&&(
            <>
                <hr/>
                <div className="menu">
                    <span>text1</span>
                    <span>text2</span>
                </div>
            </>
        )}
        

      </div>

    </>
  )
}

export default Navbar
