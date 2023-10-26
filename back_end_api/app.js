const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();  

const app = express();
app.use(cors())                     //Enable external access
app.use(express.json())
app.use(express.urlencoded({extended: true}))

mongoose.connect(process.env.MONGOSTRING, {useNewUrlPrse: true}, () => {
    console.log("Sono connesso al Database con successo!");
})

app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`Sono in ascolto sulla porta ${process.env.PORT}`)
})

//----------------- ROTTE API Restauranti ------------------------

const inserimentoRist = require("./controllers/Ristorante/inserimento");
const cercatuttiRist = require("./controllers/Ristorante/cercatutti");
const cercasingoloRist = require("./controllers/Ristorante/cercasingolo");
const inserimentoRec = require("./controllers/Recensione/inserimento");



app.post("/api/ristorante", inserimentoRist, (req, res) =>{
    if (!req.user) {
        return res.status(401).json({ message: 'Utente non autenticato' });
      }
    
      const newRestaurant = new Restaurant({
        name: req.body.name,
        indirizzo: req.body.indirizzo,
        tipoCucina: req.body.tipoCucina,
      });
    
      newRestaurant.save((err, restaurant) => {
        if (err) {
          return res.status(500).json({ message: 'Errore durante il salvataggio del ristorante' });
        }
        res.json(restaurant);
      });
    });

app.get("/api/ristorante", cercatuttiRist)
app.get("/api/ristorante/:id", cercasingoloRist)
app.post("/api/recensione", inserimentoRec)
app.post('/ristorante/:id/recensione', (req, res) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Utente non autenticato' });
    }
  
    Ristorante.findById(req.params.id, (err, ristorante) => {
      if (err || !ristorante) {
        return res.status(404).json({ message: 'Ristorante non trovato' });
      }
  
      const newReview = new Review({
        user: req.user._id,
        ristoranteId: ristoranteId._id,
        autore: req.body.autore,
        testo: req.body.testo,
        voto: req.body.voto,
      });
  
      newReview.save((err, review) => {
        if (err) {
          return res.status(500).json({ message: 'Errore durante il salvataggio della recensione' });
        }
        res.json(review);
      });
    });
  });
//----------------- ROTTE API Utenti ------------------------

const inserimentoUt = require("./controllers/Utente/inserimento");
const cercatuttiUt = require("./controllers/Utente/cercatutti");
const cercasingoloUt = require("./controllers/Utente/cercasingolo");
const accessoUt = require("./controllers/Utente/accesso");
const Ristorante = require("./models/Ristorante");

app.post("/api/utente", inserimentoUt)
app.get("/api/utente", cercatuttiUt)
app.get("/api/utente/:id", cercasingoloUt)
app.post("/api/login", accessoUt)
