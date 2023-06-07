const express=require('express');
const router=express.Router();
const { leerUrls,agregarUrl } =require('../controller/homeController');

router.get('/',leerUrls);
router.post('/',agregarUrl); 

module.exports =router;