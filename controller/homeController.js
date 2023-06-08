const Url = require('../models/Url');
const shortid = require('shortid');


const leerUrls = async (req, res) => {

    try {
        const urls = await Url.find().lean()
        res.render("home", { urls: urls })

    }
    catch (err) {

        console.log(err);
        res.render("Fallo Algo");
    }


};

const agregarUrl = async (req, res) => {
    const { origin } = req.body;

    try {
        const url = new Url({ origin: origin, shortURL: shortid() })
        await url.save();
        res.redirect("/");
    }


    catch (error) {

        console.log("algo fallo, " + error);
        res.send("algo fallo");
    }

};

const eliminarUrl = async (req, res) => {
    const { id } = req.params;
    try {

        await Url.findByIdAndDelete(id)
        res.redirect("/");

    }

    catch (error) {

        console.log("algo fallo, " + error);
        res.send("algo fallo");
    }
};

module.exports = {
    leerUrls,
    agregarUrl,
    eliminarUrl,
};