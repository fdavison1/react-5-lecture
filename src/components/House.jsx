import React from 'react'
import {withRouter} from 'react-router-dom'

const House = (props) => {
    return (
        <>
        <header style={{background: props.secondaryColor, color: props.mainColor}}>
            <h2>Welcome to {props.match.params.name}!</h2>
        </header>
        </>
    )
}

export default withRouter(House)