const express=require('express');
const router=express.Router();
const { leerUrls,agregarUrl,eliminarUrl } =require('../controller/homeController');


router.get('/',leerUrls);
router.post('/',agregarUrl); 
router.get('/eliminar/:id',eliminarUrl);

module.exports =router;