const express = require("express");
const app = express();
const port = 3004; // Port für den Server

// Route für die Homepage
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/Home.html");
});

// Routen für weitere Seiten (analog zu Homepage)
app.get("/kontakt", (req, res) => {
  res.sendFile(__dirname + "/Kontakt.html");
});

app.get("/ueber-uns", (req, res) => {
  res.sendFile(__dirname + "/Ueber uns.html");
});

app.get("/impressum", (req, res) => {
  res.sendFile(__dirname + "/Impressum.html");
});

app.get("/datenschutz", (req, res) => {
  res.sendFile(__dirname + "/Datenschutz.html");
});

app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
