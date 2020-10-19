import React from 'react'
import { NavLink } from 'react-router-dom'
import './Card.css'

function Card({image, name}) {
    return (
        <NavLink exact to="/result-id">
        <div className='card'>
            {/* <img src="https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg" alt=""/>
            <h1>Name</h1> */}
            <img src={image} alt=""/>
            <h1>{name}</h1>
        </div>
        </NavLink>
    )
}

export default Card
