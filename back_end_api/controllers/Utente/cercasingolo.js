const Utenti = require("../../models/Utenti")

module.exports = async (req, res) => {
    try {
        let risultato = await Utenti.findById(req.params.id)

        res.json({
            status: 'success',
            data: risultato
        })
    } catch (error) {
        res.json({
            status: 'error',
            data: error
        })
    }
}
