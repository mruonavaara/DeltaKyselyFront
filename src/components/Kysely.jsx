import { useState } from "react";

export default function Kysely({ kysely, tallennaVastaukset }) {
  const [vastaukset, setVastaukset] = useState({});

  const inputChanged = (event, kysymysId) => {
    let updatedVastaukset = [...vastaukset, { [event.target.name]: event.target.value }];
    setVastaukset(updatedVastaukset);
    console.log("vastaukset", updatedVastaukset);
  };

  const handleSubmit = () => {
    let lopullisetVastaukset = [];
    //for silmukalla käydään vastaukset staten vataukset läpi ja luodaan lopullinenVastaus olio,
    //joka on oikeassa muodossa ja tallennetaan se lopullisetVastaukset taulukkoon.
    const aputaulukko = [...vastaukset];
    console.log("Aputaulukko: " + aputaulukko);
    for (let i = 0; i < aputaulukko.length; i++) {
      lopullisetVastaukset = [...lopullisetVastaukset, { vastausTxt: "sininen", kysymys: { kysymysId: 3 } }];
    }
    console.log(lopullisetVastaukset);
    /*const testiVastaukset =

    [ {
      "vastausTxt": "sininen",
      "kysymys": {
          "kysymysId": 1
      }
  },
   {
      "vastausTxt": "Rotta",
      "kysymys": {
          "kysymysId": 2
      }
  }
]*/
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
            <input type="text" name={`${kysymys.kysymysId}`} placeholder="vastaus" onChange={(event) => inputChanged(event)} />
          </p>
        ))}
        <button onClick={handleSubmit}>Tallenna vastaukset</button>
      </div>
    </div>
  );
}
