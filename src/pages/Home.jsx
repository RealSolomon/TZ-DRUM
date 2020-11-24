import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <Link to="/game">
            <button className="btn btn-start" >СТАРТ</button>
            </Link>
        </div>
    )
}
export default Home
