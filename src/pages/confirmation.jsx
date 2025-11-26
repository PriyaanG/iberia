import IberiaNavbar from "./navbar.jsx";

function App() {

  function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alphabet() {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const index = randomNumber(0, letters.length - 1);
  return letters[index];
}


  const confirmationNumber =
    "IB" +
    randomNumber(1, 9) +
    randomNumber(1, 9) +
    randomNumber(1, 9) +
    alphabet().toUpperCase() +
    randomNumber(1, 9) +
    randomNumber(1, 9) +
    alphabet().toUpperCase() +
    alphabet().toUpperCase() +
    alphabet().toUpperCase();

  return (
    <>
      <IberiaNavbar />
      <div className="Gracias">
        <h1 className="HolaText">Gracias para viajar con Iberia!</h1>
        <h3 className="ConfirmationText">
          Thank you for choosing to fly with Iberia VA.
        </h3>
      </div>

      <h4 className="ConfirmationNumber">
        Confirmation (Confirmación)# {confirmationNumber}
      </h4>

      <button className="Casa">Casa | Home</button>

      <img
        height="300px"
        width="600px"
        className="EresMas"
        src="../assets/IberiaAD1.webp"
      />
    </>
  );
}

export default App;
