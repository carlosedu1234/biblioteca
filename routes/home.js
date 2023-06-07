const express=require('express');
const router=express.Router();

router.get('/', (req, res)=>{

    const urls = [
        {
            origin: "https://www.youtube.com/watch?v=xkHyM-K3Cd8&ab_channel=Bluuweb",
            shorturl: "cursoNOdejs"
        },
        {
            origin: "https://www.https://www.npmjs.com/package/express-handlebars.com/watch?v=xkHyM-K3Cd8&ab_channel=Bluuweb",
            shorturl: "Npm"
        },
        {
            origin: "https://mercadolibre.eightfold.ai/careers/search?pid=11792755&domain=mercadolibre.com&sort_by=relevance",
            shorturl: "MercadoLibre"
        },
        {
            origin: "https://mercadolibre.eightfold.ai/careers/search?pid=11792755&domain=mercadolibre.com&sort_by=relevance1",
            shorturl: "MercadoLibre1"
        }
    ]
    res.render('home', { urls: urls });

});

module.exports =router;