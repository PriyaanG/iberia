import React from "react"
import { useState } from 'react'
import '../App.css'
import Container from 'react-bootstrap/Container';
import IberiaNavbar from './navbar.jsx';
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
    <div className="floatBottom" style={{visibility:flightName}}><h1 className="ReduceWidth">Booking Class:</h1><a href="https://discord.com/oauth2/authorize?client_id=1347651472656961536&response_type=code&redirect_uri=https://iberiava.vercel.app/discordoauth/redirect&scope=identify+guilds&state=Economy"><button className="splitBtns">Economy</button></a><a href="https://discord.com/oauth2/authorize?client_id=1347651472656961536&response_type=code&redirect_uri=https://iberiava.vercel.app/discordoauth/redirect&scope=identify+guilds&state=Business"><button>Business</button></a></div>
    <IberiaNavbar />
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
