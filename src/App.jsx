import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

import Kysely from "./components/Kysely";

function App() {
  const [kyselyt, setKyselyt] = useState([]);

  useEffect(() => {
    fetchKyselyt();
  }, []);

  const fetchKyselyt = async () => {
    try {
      const response = await fetch("http://localhost:8080/kyselyt/1");
      //const response = await fetch("http://backend-deltakysely-back.rahtiapp.fi/kyselyt/1");
      const data = await response.json();
      setKyselyt(data);
    } catch (error) {
      console.error("Virhe haettaessa kyselyitä:", error);
    }
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
    <div>
      {/* Näytetään kyselyt */}
      {kyselyt.map((kysely, kyselyId) => (
        <Kysely key={kyselyId} kysely={kysely} tallennaVastaukset={tallennaVastaukset} />
      ))}
    </div>
  );
}

export default App;
