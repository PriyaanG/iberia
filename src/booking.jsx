import React from "react"
import { useState } from 'react'
import './App.css'
import Container from 'react-bootstrap/Container';
import { Dropdown } from "bootstrap";
import { createBootstrapComponent } from "react-bootstrap/esm/ThemeProvider";
import IberiaNavbar from "./navbar.jsx"

function App() {
  return (
    <>
    <IberiaNavbar />
    <div className="Hola">
   <h1 className="HolaText">Hola Priyaanplayz,</h1>
   <h3 className="ConfirmationText">Confirm Your Details</h3>
   </div>
   <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%' }}>
  <thead>
    <tr>
      <th>Flight (Vuelo) #</th>
      <th>From (De)</th>
      <th>To (A)</th>
      <th>Time (Hora)</th>
      <th>Class (Clase)</th>
    </tr>
  </thead>
  <tbody>
      <td>IB356</td>
      <td>San Francisco (SFO)</td>
      <td>Madrid - Barajas (MAD)</td>
      <td>11pm EDT</td>
      <td>Economy</td>
  </tbody>
</table>
<button>Comprar | Purchase</button>
<a href="iberiava.vercel.app/"><button>Return to Home | Returno a Casa</button></a>
    </>
  )
}

export default App
