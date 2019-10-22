import React from 'react'

const House = (props) => {
    return (
        <div>
            <h2>Welcome to {props.match.params.name}!</h2>
        </div>
    )
}

export default House