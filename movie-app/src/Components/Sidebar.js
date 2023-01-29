import React, { Children } from 'react';
import {FaTh,FaBars} from 'react-icons/fa'
import { NavLink } from 'react-router-dom';

const Sidebar = ({children}) => {
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
        <div className="sidebar">
            <div className="top_section">
                <h1 className="logo">Logo</h1>    
                <div className="bars">
                    <FaBars />
                </div>
            </div>
            {
                menuItem?.map((item,index)=>{
                    return(
                        <NavLink to={item.path} key={index} className="link" activeClassName="acitve">
                            <div className="icon">{item.icon}</div>
                            <div className="link_text">{item.name}</div>
                        </NavLink>
                    )
                })
            }
        </div>
        <main>{children}</main>
    </div>
  )
}

export default Sidebar