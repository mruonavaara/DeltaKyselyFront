import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Kysely from "./components/Kysely";
import Vastaukset from "./components/Vastaukset";

function App() {
  const [kyselyt, setKyselyt] = useState([]);
  const [showKysely, setShowKysely] = useState(true); // Tilamuuttuja kyselyn näyttämiseen

  useEffect(() => {
    fetchKyselyt();
  }, []);

  const fetchKyselyt = async () => {
    try {
      const response = await fetch("http://localhost:8080/kyselyt/1");
      const data = await response.json();
      setKyselyt(data);
    } catch (error) {
      console.error("Virhe haettaessa kyselyitä:", error);
    }
  };

  const handleVastauksetClick = () => {
    setShowKysely(false); // Piilota kysely kun "Tarkastele vastauksia" -nappia painetaan
  };
  const tallennaVastaukset = async (vastaukset) => {
    try {
      const response = await fetch("http://localhost:8080/vastaukset", {
        //const response = await fetch("http://backend-deltakysely-back.rahtiapp.fi/vastaukset", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(vastaukset),
      });
      if (response.ok) {
        console.log("Vastaukset tallennettu onnistuneesti!");
      } else {
        console.error("Vastauksien tallentaminen epäonnistui.");
      }
    } catch (error) {
      console.error("Virhe tallennettaessa vastauksia:", error);
    }
  };

  return (
    <Router>
      <div>
        {/* Näytetään kyselyt */}
        {showKysely && kyselyt.map((kysely, kyselyId) => <Kysely key={kyselyId} kysely={kysely} tallennaVastaukset={tallennaVastaukset} />)}
        {/* "Tarkastele vastauksia" -nappi */}
        {showKysely && (
          <Link to="/vastaukset">
            <button onClick={handleVastauksetClick}>Tarkastele vastauksia</button>
          </Link>
        )}
        <Routes>
          <Route exact path="/vastaukset" element={<Vastaukset />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
