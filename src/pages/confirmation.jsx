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
  <img height="300px" width="600px" className="EresMas" src="https://cdn.discordapp.com/attachments/1407941692547666070/1428864165375905893/IberiaAD1.png?ex=68f40cf4&is=68f2bb74&hm=79e1a4362bc2781155f64e84787b8b59fff267a0e7d89d5307dd22c7fafe5fc4"></img>
    </>
  )
}

export default App
