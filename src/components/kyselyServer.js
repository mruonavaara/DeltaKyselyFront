const express = require("express");
const app = express();

// Tietoturvakirjasto
let helmet = require("helmet");
app.use(helmet({ crossOriginResourcePolicy: false }));

// Asetus, jotta kuvia voidaan ladata
app.use(express.urlencoded({ limit: "5mb", extended: true }));

const cors = require("cors");
app.use(cors());

app.use(express.json());

const sqlite3 = require("sqlite3");

const db = new sqlite3.Database("kyselyt.db", (error) => {
  if (error) {
    console.log(error.message);
  }
});

const PORT = 8080;

// Palvelin kuuntelee annettua porttia
app.listen(PORT, () => {
  console.log("Node toimii localhost:" + PORT);
});

// Reititys on pelkkä / esim. localhost:8080/
app.get("/", (req, res) => {
  return res.status(200).json({ message: "Toimii" });
});

// Kaikkien rivin haku kannasta
app.get("/kyselyt", (req, res) => {
  db.all("SELECT kyselyId, otsikko FROM kysely", (error, results) => {
    if (error) {
      console.log(error.message);
      return res.status(400).json({ message: error.message });
    }

    return res.status(200).json(results);
  });
});

// Jos mikään aiempi reititys on sopinut, silloin suoritetaan tämä
app.get("*", (req, res) => {
  return res.status(404).json({ message: "Ei pyydettyä palvelua" });
});
