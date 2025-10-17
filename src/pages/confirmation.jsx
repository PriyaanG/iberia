import React from "react"
import { useState } from 'react'
import '../App.css'
import Container from 'react-bootstrap/Container';
import { Dropdown } from "bootstrap";
import { createBootstrapComponent } from "react-bootstrap/esm/ThemeProvider";
import IberiaNavbar from "./navbar.jsx"

function App() {
  return (
    <>
    <IberiaNavbar />
    <div className="Hola">
   <h1 className="HolaText">Gracias para viajar con Iberia!</h1>
   <h3 className="ConfirmationText">Thank you for choosing to fly with Iberia</h3>
 </div>

   <h4>Confirmation (Confirmación)# {confirmationNumber}</h4>
  
    </>
  )
}

export default App
