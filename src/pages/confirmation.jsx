import React from "react"
import { useState } from 'react'
import '../App.css'
import Container from 'react-bootstrap/Container';
import { Dropdown } from "bootstrap";
import { createBootstrapComponent } from "react-bootstrap/esm/ThemeProvider";
import IberiaNavbar from "./navbar.jsx"
import randomString from 'randomized-string';

function App() {
  var confirmationNumber = randomString.generate({
  prefix: "IB",
  length: 12,
});
  return (
    <>
    <IberiaNavbar />
    <div className="Gracias">
   <h1 className="HolaText">Gracias para viajar con Iberia!</h1>
   <h3 className="ConfirmationText">Thank you for choosing to fly with Iberia VA.</h3>
 </div>

   <h4 className="ConfirmationNumber">Confirmation (Confirmación)# {confirmationNumber}</h4>
   <button className="Casa">Casa | Home</button>
  <img height="300px" width="600px" className="EresMas" src="../assets/IberiaAD1.webp"></img>
    </>
  )
}

export default App
