import React from 'react'

const MissingPage =(props)=>{
    return(
        <div>
            <h1>404</h1>
            <h3>You've found the Room of Requirement</h3>
            <h4 onClick={() => props.history.goBack()}>Click to come back from whence you came.</h4>
        </div>
    )
}

export default MissingPage