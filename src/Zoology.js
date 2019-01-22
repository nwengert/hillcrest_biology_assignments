import React from 'react'
import { Link } from 'react-router-dom'


function Zoology() {
    const pathname = window.location.pathname

    return(
        <div>
            {pathname === '/zoology'&& 
                <div>
                    <Link to="/"        className='link'>Back</Link>
                    <Link to="/biology" className='link'>Biology</Link>
                    <p>This is Zoology</p>
                </div>
            }
        </div>
    )
}
export default Zoology

