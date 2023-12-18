import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../Styles/addcar.css"
import { redirect } from 'react-router-dom'
function Addcars() {

    const [car, setCar] = useState({ name: "", price: "", brand: "", color: "", type: "", image: "" })
    const navigate = useNavigate()

    async function addCarToDb() {
        await fetch("http://localhost:8080/cars",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(car)
            })

        navigate("/")

    }


    return (
        <div className="addcar">
            <div>
                <label>enter the name of the car</label>
                <input type="text" name="name" id="name" value={car.name} onChange={(e) => { let c = { ...car, [e.target.name]: e.target.value }; setCar(c) }} />
            </div>

            <div>
                <label>enter the brand</label>
                <input type="text" name="brand" id="brand" value={car.brand} onChange={(e) => { let c = { ...car, [e.target.name]: e.target.value }; setCar(c) }} />
            </div>

            <div>
                <label>enter the image url</label>
                <input type="text" name="image" id="image" value={car.image} onChange={(e) => { let c = { ...car, [e.target.name]: e.target.value }; setCar(c) }} />
            </div>

            <div>

                <label>enter the price</label>
                <input type="number" name="price" id="price" value={car.price} onChange={(e) => { let c = { ...car, [e.target.name]: e.target.value }; setCar(c) }} />
            </div>

            <div>
                <label>select the type of the car</label>
                <input type="text" name="type" id="type" value={car.type} onChange={(e) => { let c = { ...car, [e.target.name]: e.target.value }; setCar(c) }} />
            </div>

            <div>
                <label>enter the color of the car</label>
                <input type="text" name="color" id="color" value={car.color} onChange={(e) => { let c = { ...car, [e.target.name]: e.target.value }; setCar(c) }} />
            </div>

            <button onClick={addCarToDb}>add</button>

        </div>
    )
}

export default Addcars
