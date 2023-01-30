import React, { useState } from 'react';
import {FaTh,FaBars} from 'react-icons/fa'
import { NavLink } from 'react-router-dom';

const Sidebar = ({children}) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleHandle = () =>{
        setIsOpen(!isOpen)
    }

    const menuItem = [
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/playlist",
            name:"Playlist",
            icon:<FaTh/>
        },
        {
            path:"/movie",
            name:"Movie",
            icon:<FaTh/>
        }
    ]

  return (
    <div className="container">
        <div style={{width :isOpen ? "300px":"50px" }} className="sidebar">
            <div className="top_section">
                <h1 style={{display :isOpen ? "block":"none" }} className="logo">Logo</h1>    
                <div style={{marginLeft :isOpen ? "50px":"0" }} className="bars">
                    <FaBars onClick={toggleHandle} />
                </div>
            </div>
            {
                menuItem?.map((item,index)=>{
                    return(
                        <NavLink to={item.path} key={index} className="link" activeClassName="acitve">
                            <div className="icon">{item.icon}</div>
                            <div style={{display :isOpen ? "block":"none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    )
                })
            }
        </div>
        {/* style={{width :isOpen ? "100%":"50px" }} */}
        <main style={{width:"100%",background:'#273244' }}>{children}</main>
    </div>
  )
}

export default Sidebar