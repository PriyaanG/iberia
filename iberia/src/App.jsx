import React from "react"
import { useState } from 'react'
import './App.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Dropdown } from "bootstrap";
import { createBootstrapComponent } from "react-bootstrap/esm/ThemeProvider";

function App() {
  const [flightNo, setFlightNo] = useState("Flight / Vuelo #")
  const [flightName, setFlightName] = useState("hidden")
function flightNoSet (flightNum){
  setFlightNo(flightNum)
  console.log(flightNum)
  setFlightName("visible")
}
  return (
    <>
    <h1 className="RouteName" style={{ visibility:flightName}}>San Francisco to Madrid</h1>
    <h1 className="DeptTime" style={{visibility:flightName}}>Departure Time: 11pm EDT</h1>
    <div className="floatBottom" style={{visibility:flightName}}><h1 className="ReduceWidth">Booking Class:</h1><a href="https://discord.com/oauth2/authorize?client_id=1347651472656961536&response_type=code&redirect_uri=https%3A%2F%2Fcongenial-happiness-g4x94w967vvjh9g9q-5174.app.github.dev%2Fiberia%2Fdiscordoauth%2Fredirect&scope=identify+guilds&state=Economy"><button className="splitBtns">Economy</button></a><a href="https://discord.com/oauth2/authorize?client_id=1347651472656961536&response_type=code&redirect_uri=https%3A%2F%2Fcongenial-happiness-g4x94w967vvjh9g9q-5174.app.github.dev%2Fiberia%2Fdiscordoauth%2Fredirect&scope=identify+guilds&state=Business"><button>Business</button></a></div>
    <Navbar className="bg-body-tertiary navbar" >
      <a href="/iberia/index.html">
          <Navbar.Brand>
            <img
              alt="Iberia Logo"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2020%2F12%2FIberia-Logo.png&f=1&nofb=1&ipt=98bc1e4a84db1d8064372ea50d79aae7cc5af3903a7ffdde301ae9ebaf4b594c"
              width="130"
              height="85"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <h2>Virtual</h2>
          </a>
          <Navbar.Collapse className="buttons-container">
            <button className="button">Careers</button>
      
            <button className="button">Server</button>
          
            <button className="button">About Us</button>
          
    
           <img 
           src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F007%2F409%2F979%2Foriginal%2Fpeople-icon-design-avatar-icon-person-icons-people-icons-are-set-in-trendy-flat-style-user-icon-set-vector.jpg&f=1&nofb=1&ipt=5178d8a2d8c290432f4eb476c65ae371ab825b95ee59c80ec1d4c954f1293c9b"
           alt="Person Icon"
           width="35"
           height="35"
           marginright="5%"
           >
           </img>
        </Navbar.Collapse>
      </Navbar>
      <h1 className="BookingText">Booking / Reserva</h1>
      <div className="Booking">
          <div className="dropdown">
  <button className="dropbtn">{flightNo}</button>
  <div className="dropdown-content">
    <button onClick={() => flightNoSet("IB356")} height="30px" href="#" className="flight">IB356<img className="bookinglogo"src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2020%2F12%2FIberia-Emblem.png&f=1&nofb=1&ipt=64a637335920b830fb2d63ef9656d6c6cf6430c145ff721493bc2fed7d198de5"></img></button>
     <button  onClick={() => flightNoSet("IB355")} height="30px" href="#" className="flight">IB355<img className="bookinglogo"src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2020%2F12%2FIberia-Emblem.png&f=1&nofb=1&ipt=64a637335920b830fb2d63ef9656d6c6cf6430c145ff721493bc2fed7d198de5"></img></button>
      <button  onClick={() => flightNoSet("IB355")} height="30px" href="#" className="flight">IB355<img className="bookinglogo"src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2020%2F12%2FIberia-Emblem.png&f=1&nofb=1&ipt=64a637335920b830fb2d63ef9656d6c6cf6430c145ff721493bc2fed7d198de5"></img></button>
  </div>
</div>
        </div>
    </>
  )
}

export default App
