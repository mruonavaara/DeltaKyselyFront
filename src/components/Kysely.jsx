function Kysely({ kysely }) {
  return (
    <div>
      Id: {kysely.kyselyId}
      Otsikko: {kysely.otsikko}
      Kysymykset: {kysely.kysymykset.kysymysTeksti}
      <br />
    </div>
  );
}
export default Kysely;
