import React from 'react'

function Assignment(props) {
    return(
        <div>
            <h1>{props.name}</h1>
            <h2>{props.dueDate}</h2>
        </div>
    )
}

export default Assignment