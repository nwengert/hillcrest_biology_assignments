import React from 'react'

function Assignment(props) {
    return(
        <div>
            <p>Assignment Component</p>
            <p>{this.props.name}</p>
            <p>{this.props.dueDate}</p>
        </div>
    )
}

export default Assignment