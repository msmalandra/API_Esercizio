const Utenti = require("../../models/Utenti")
const storage = require('node-sessionstorage')

module.exports = async (req, res) => {
    try {
        let risultato = await Utenti.findOne({
            email: req.body.email,
            password: req.body.password,
            status: true,
        });

        storage.setItem('email', email)
        storage.setItem('password', password)
        
        console.log('item set:', storage.getItem('email'))
        console.log('item set:', storage.getItem('password'))

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