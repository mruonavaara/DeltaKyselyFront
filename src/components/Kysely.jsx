function Kysely({ kysely }) {
  return (
    <div>
      <div>Id: {kysely.kyselyId}</div>
      <div>Otsikko: {kysely.otsikko}</div>
      <div>
        Kysymykset:
        <ul>
          {kysely.kysymykset.map((kysymys, index) => (
            <li key={index}>{kysymys.kysymysTeksti}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Kysely;
