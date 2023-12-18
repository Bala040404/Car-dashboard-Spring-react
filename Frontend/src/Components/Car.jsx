import React from 'react'
import "../Styles/Car.css"
function Car(props) {
    return (
        <div className='car'>
            <img src={props.car.image}></img>
            <h3>{props.car.name}</h3>
            <h4>{props.car.brand}</h4>

        </div>
    )
}

export default Car
