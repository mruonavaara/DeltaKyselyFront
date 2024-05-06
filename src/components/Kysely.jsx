import React, { useState } from "react";
import KyselynNäyttö from "./KyselynNäyttö";

export default function Kysely({ kysely, tallennaVastaukset }) {
  const [vastaukset, setVastaukset] = useState({});

  const inputChanged = (event, kysymysId) => {
    setVastaukset({
      ...vastaukset,
      [kysymysId]: event.target.value,
    });
  };

  const handleSubmit = () => {
    let lopullisetVastaukset = [];

    Object.keys(vastaukset).forEach((kysymysId) => {
      lopullisetVastaukset.push({
        vastausTxt: vastaukset[kysymysId],
        kysymys: { kysymysId: parseInt(kysymysId) },
      });
    });

    tallennaVastaukset(lopullisetVastaukset);
  };

  return (
    <div>
      <div>Id: {kysely.kyselyId}</div>
      <div>Otsikko: {kysely.otsikko}</div>
      <div>
        Kysymykset:
        {kysely.kysymykset.map((kysymys, index) => (
          <p key={kysymys.kysymysId}>
            {kysymys.kysymysTeksti} <br />
            <input type="text" name={`${kysymys.kysymysId}`} placeholder="vastaus" onChange={(event) => inputChanged(event, kysymys.kysymysId)} />
          </p>
        ))}
        <button onClick={handleSubmit}>Tallenna vastaukset</button>
      </div>
    </div>
  );
}
