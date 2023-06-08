const path = require('path');
const { URL } = require('url');
const urlValidar = (req, res, next) => {

    try {

        const { origin } = req.body;
        const urlFrontEnd = new URL(origin);

        if (urlFrontEnd.origin !== "null") {
            return next();

        }
        else { throw new Error("no valida 😤"); }

    }

    catch (e) {

    
        return res.sendFile(path.join(__dirname,'../img/gato-entonces.gif'));
        
       
    

    }


};





module.exports = urlValidar;