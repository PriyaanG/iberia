import React, { useState, useEffect } from "react";
import "../App.css";
import IberiaNavbar from "./navbar.jsx";

function App() {
  const [username, setUsername] = useState("");
  const [flightState, setFlightState] = useState({ flightNo: "-", class: "-" });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const user = params.get("username");
    const stateParam = params.get("state");

    if (user) setUsername(user);

    if (stateParam) {
      try {
        const decoded = JSON.parse(decodeURIComponent(decodeURIComponent(stateParam)));
        setFlightState(decoded);
      } catch (err) {
        console.error("Error decoding state:", err);
      }
    }
  }, []);

  return (
    <>
      <IberiaNavbar />

      <div className="Hola">
        <h1 className="HolaText">Hola {username || "Guest"},</h1>
        <h3 className="ConfirmationText">Confirm Your Details</h3>
      </div>

      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%" }}>
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
          <tr>
            <td>{flightState.flightNo}</td>
            <td>San Francisco (SFO)</td>
            <td>Madrid - Barajas (MAD)</td>
            <td>11pm EDT</td>
            <td>{flightState.class}</td>
          </tr>
        </tbody>
      </table>

      <a href="confirmation.html">
        <button className="Comprar">Comprar | Purchase</button>
      </a>
      <a href="https://iberiava.vercel.app/" className="floatBottom ReturnoCasa">
        <button>Return to Home | Returno a Casa</button>
      </a>
    </>
  );
}

export default App;
