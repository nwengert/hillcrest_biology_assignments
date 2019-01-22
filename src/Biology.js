import { Link } from 'react-router-dom'
import React from 'react'
import yellowBird from './images/yellowBird.jpg'

function Biology(props) {
    const pathname = window.location.pathname
    const bAssignments = [
        {
            name: "Bird-Notes",
            assignedMonth: 0,
            assignedDay: 6,
            dueMonth: 0,
            dueDay: 10,
            picture: yellowBird
        },
        {
            name: "Origin of Birds",
            assignedMonth: 0,
            assignedDay: 10,
            dueMonth: 0,
            dueDay: 15,
            picture: yellowBird
        }
    ]
    console.log(props)


    return(
        <div>
            {pathname === '/biology'&& 
                <div>
                    <Link to="/"        className='link'>Back</Link>
                    <Link to="/zoology" className='link'>I meant to click Zoology</Link>
                    <h1>3rd quarter Biology Assignments</h1>


                    <div className='assignments'>
                        {bAssignments.map(assignment => <div className='assignment' key={assignment.name}>
                                                            <h3>{assignment.name}</h3>
                                                            <h5>Date Assigned:     {props.month[assignment.assignedMonth]} {assignment.assignedDay}</h5>
                                                            <h5>Due Date:          {props.month[assignment.dueMonth]} {assignment.dueDay}</h5>
                                                            <h5>Days since due:    {props.dd - assignment.dueDay}</h5>
                                                            <h4>Percent Penalized: {10 + (props.dd - assignment.dueDay)*2}%</h4>
                                                        </div>
                                        )
                        }
                    </div>
                </div>
            }
        </div>
    )
}
export default Biology