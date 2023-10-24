const Utenti = require("../../models/Utenti")
const storage = require('node-sessionstorage')

module.exports = async (req, res) => {
    try {
        let risultato = await Utenti.findOne({
            email: req.body.email,
            password: req.body.password,
            status: true,
        });

        res.json({
            status: "success",
            data: "sei conesso"
        })
    } catch (error) {
        res.json({
            status: "error",
            data: error
        })
    }
}