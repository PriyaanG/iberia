import '../index.css'
import IberiaNavbar from './navbar.jsx';

function App(){
    return(
    <>
        <div className="AboutIberia">
            <IberiaNavbar />
                <h1>Sobre Nosotros (About Us)</h1>
                 <img className="ConIberiaEresMasAD" src="../assets/ConIberia-EresMas.png"/>
                <p className="ABt"style={{size:"50%"}}>Founded by IntiDaMonkey in the March of 2023, Iberia has grown to become a reputed airline in the PTC community since its creation. From Iberia's birth to its current day, Iberia has strived to maintain a higher standard of excellence in the PTC community. It has grown rapidly with a whopping 170 players in the server! Iberia continues to strive to provide a easy and memorable experience for everyone. We also have created great strides in connecting ourselves with other PTC members, helping boost the liveliness of this community. A few notable partnerships are Qantas PTFS, Oneworld Virtual and more! We are very excited to see you onboard with us at Iberia- Signed, IntiDaMonkey.</p>
        </div>
        </>
    )
}

export default App