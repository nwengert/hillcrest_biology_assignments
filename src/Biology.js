import { Link } from 'react-router-dom'
import React from 'react'
import yellowBird from './images/yellowBird.jpg'
import biologyPNG from './images/biology.png'
import meiosis from './images/meiosis.jpeg'

function Biology(props) {
    const pathname = window.location.pathname
    const bAssignments = [
        {
            name: "Meiosis Packet",
            assMonth: 0,
            assDay: 18,
            ass_ms: 1547708400000,
            dueMonth: 1,
            dueDay: 4,
            due_ms: 1549350000000,
            picture: meiosis
        },
        {
            name: "Origin of Birds",
            assignedMonth: 0,
            assignedDay: 10,
            dueMonth: 0,
            dueDay: 15,
            picture: yellowBird
        },
        {
            name: "Deathcab for Cutie",
            assignedMonth: 0,
            assignedDay: 10,
            dueMonth: 0,
            dueDay: 15,
            picture: yellowBird
        },
        {
            name: "The Refreshments",
            assignedMonth: 0,
            assignedDay: 10,
            dueMonth: 0,
            dueDay: 15,
            picture: yellowBird
        },
        {
            name: "Original Gangster",
            assignedMonth: 0,
            assignedDay: 10,
            dueMonth: 0,
            dueDay: 15,
            picture: yellowBird
        }
    ]
    console.log(props)
    //Get 1 day in milliseconds
    var one_day=1000*60*60*24;
    //                                              DO LOGICS FOR days since due UP HERE !!
    return(
        <div>
            {pathname === '/biology'&& 
                <div className='container'>
                    <div className='header'>
                        <img id='biologyPNG' src={biologyPNG} alt="Biology"/>
                        <h1 className='headerTitle'>3rd quarter Assignments</h1>
                        <span>Today's date: {props.mm + props.dd}</span> 
                    </div>
                    <div className='menu'>
                        <Link to="/"        className='link'>Back</Link>
                        <Link to="/zoology" className='link'>Zoology</Link>
                    </div>

                    <div className='assignments'>
                        {bAssignments.map(assignment => <div className='assignment' key={assignment.name}>
                                                            <h2>{assignment.name}</h2>
                                                            <div id='assignmentBody'>
                                                                <div id='assignmentInnerBody'>
                                                                    <h5>Date Assigned:     {props.month[assignment.assMonth]} {assignment.assDay}</h5>
                                                                    <h5>Due Date:          {props.month[assignment.dueMonth]} {assignment.dueDay}</h5>
                                                                    <h5>Days since due:    {Math.floor((props.todayMS - assignment.due_ms)/one_day)}</h5>
                                                                </div>
                                                                <img src={assignment.picture} className='assignmentImg' alt="yellow bird"/>
                                                            </div>
                                                            <h3>Percent Penalized: {Math.floor(10 + ((props.todayMS - assignment.due_ms)/one_day)*2)}%</h3>
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