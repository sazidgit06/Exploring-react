import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Person></Person>
      <Car name="Rolse Royce" price="6cr"></Car>
      <Bike milage = "45km" cc ="300"></Bike>
      <Bike></Bike>
      <Bike milage = "45km" cc ="300"></Bike>
    </>
  )
}
function Person() {
  const age = 24;
  const height = 5.6;
  return <h3>I am a person with age {age} and height {height}</h3>
}

function Car(props){
  const car = {
    name: "BMW",
    model: "X3",
    price: "50lac"
  }
  
  return (
    <div className='car-style'>
      <h2>Car details</h2>
      <h4>Name {props.name}</h4>
      <h4>Model {car.model}</h4>
      <h4>Price {car.price}</h4>
    </div>
  )
}

const {milage, cc} = {milage:"45km" , cc: "300"}

function Bike({milage, cc}){
  const bike = {
    name: "Yamaha",
    model: "FZ-5",
    price: "2.5lac"
  }
  const bikestyle = {
    border : "2px solid yellow",
    borderRadius : "10px",
    padding : "10px"
  }
  return (
    <div style={bikestyle}>
      <h2>Bike details</h2>
      <h4>Name {bike.name}</h4>
      <h4>Model {bike.model}</h4>
      <h4>Price {bike.price}</h4>
      <h4>Milage {milage}</h4>
      <h4>cc {cc}</h4>
    </div>
  )
}


export default App
