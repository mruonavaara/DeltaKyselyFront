import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

import Kysely from "./components/Kysely";

function App() {
  const [kyselyt, setKyselyt] = useState([]);

  useEffect(() => {
    // Haetaan kyselyt tietokannasta kun komponentti renderöidään ensimmäisen kerran
    fetchKyselyt();
  }, []);

  // Funktio, joka hakee kyselyt tietokannasta
  const fetchKyselyt = async () => {
    try {
      const response = await fetch("http://backend-deltakysely-back.rahtiapp.fi/kyselyt/1");
      const data = await response.json();
      setKyselyt(data); // Asetetaan haetut kyselyt stateen
    } catch (error) {
      console.error("Virhe haettaessa kyselyitä:", error);
    }
  };

  return (
    <div>
      {/* Näytetään kyselyt */}
      {kyselyt.map((kysely, index) => (
        <Kysely key={index} kysely={kysely} />
      ))}
    </div>
  );
}

export default App;
