import React from 'react'
import { useState, useEffect } from "react"
import Car from './Car'
import "../Styles/allcars.css"
function Allcars() {

    const [cars, setCars] = useState([{}])

    async function fetchCars() {
        let car = await fetch("http://localhost:8080/cars")
        car = await car.json()
        setCars(car)
    }

    useEffect(() => {
        fetchCars()
    }, [])
    let contents = cars.map((e, i) => {
        return <Car key={i} car={e} />
    })
    return (
        <div className='allcars'>
            {contents}
        </div>
    )
}

export default Allcars;
