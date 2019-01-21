import { Switch, Route, NavLink, Link } from 'react-router-dom'
import React from 'react'
import yellowBird from './images/yellowBird.jpg'
import Assignment from './Assignment'

function Biology() {
    const pathname = window.location.pathname
    const bAssignments = [
        {
            name: "Bird-Notes",
            monthAssigned: 0,
            dayAssigned: 19,
            dueDate: "January 22",
            picture: yellowBird
        },
        {
            name: "Origin of Birds",
            monthAssigned: 0,
            dayAssigned: 19,
            dueDate: "January 25",
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
                    {bAssignments.map(asignment => <Assignment />)}

                </div>
            }
        </div>
    )
}
export default Biology