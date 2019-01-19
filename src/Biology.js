import { Switch, Route, NavLink, Link } from 'react-router-dom'
import React from 'react'
import yellowBird from './images/yellowBird.jpg'

function Biology() {
    const pathname = window.location.pathname
    const bAssignments = [
        {
            name: "Bird-Notes",
            monthAssigned: 0,
            dayAssigned: 19,
            picture: yellowBird
        }
    ]

    return(
        <div>
            {pathname === '/biology'&& 
                <div>
                    <Link to="/"        className='link'>Back</Link>
                    <Link to="/zoology" className='link'>I meant to click Zoology</Link>
                    <p>This is Biology</p>
                    <img src={bAssignments.picture} alt="yellow bird"/>
                </div>
            }
        </div>
    )
}
export default Biology