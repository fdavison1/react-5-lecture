import React from 'react'
import {Link} from 'react-router-dom'


const GreatHall = () => {
    return (
        <>
        <header>
            <h2>Great Hall</h2>
        </header>
        <nav>
            <Link to='/about'>History of Magic</Link>
            {/* <Link to='/' */}
        </nav>
        </>
    )
}

export default GreatHall