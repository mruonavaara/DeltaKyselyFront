import { useState} from "react";
export default function Kysely({ kysely, tallennaVastaukset }) {

  const [vastaukset, setVastaukset] = useState({});

  const inputChanged = (event) => {
    setVastaukset({ ...vastaukset, [event.target.name]: event.target.value});
    console.log("vastaukset", vastaukset)
    }

    const handleSubmit = () => {
      tallennaVastaukset(vastaukset);
    };
    


  return (
    <div>
      <div>Id: {kysely.kyselyId}</div>
      <div>Otsikko: {kysely.otsikko}</div>
      <div>
        Kysymykset:
        
          {kysely.kysymykset.map((kysymys, kysymysId) => (
            <p key={kysymysId}>{kysymys.kysymysTxt} <br></br>
              <input type="text"
              name={`vastaus_${kysymys.kysymysId}`}
              placeholder="vastaus"
              value={kysymys.vastaukset.vastausTxt}
              onChange={inputChanged}></input></p>
          ))}
          <button onClick={handleSubmit} >Tallenna vastaukset</button>
  
      </div>
    </div>
  );
}
//<input type="text" value={kysymys} onChange={inputChanged}> </input>