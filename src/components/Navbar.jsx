import React from 'react'
import logo from '../assets/logo.png'
import './Navbar.css'
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='content'>
        <div className="left">
            <img src={logo} alt="" />
            <div className="title" onClick={()=>navigate('/')} style={{cursor:"pointer"}}>Prof. Ganapati Panda</div>
        </div>
        <div className="right">
            <div className="Home" onClick={()=>navigate('/')}>Home</div>
            {/* <div className="Games" onClick={()=>navigate('/tictactoe')}>Research</div> */}
            <div className="Students" onClick={()=>navigate('/institute')}>Students</div>
            {/* <div className="Study" onClick={()=>navigate('/study')}>Awards</div> */}
            {/* <div className="Contact">Contact</div> */}
            <div className="Publication"  onClick={()=>navigate('/publication')}>Publications</div>
            <div className="Memory"  onClick={()=>navigate('/memory')}>Memories</div>

        </div>
    </div>
  )
}
