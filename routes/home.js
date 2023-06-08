const express=require('express');
const router=express.Router();
const { leerUrls,agregarUrl,eliminarUrl } =require('../controller/homeController');

const urlValida =require('../middlewares/urlValida');
router.get('/',leerUrls);
router.post('/',urlValida,agregarUrl); 
router.get('/eliminar/:id',eliminarUrl);

module.exports =router;