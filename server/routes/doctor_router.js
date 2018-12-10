var express = require('express');
var router = express.Router();
var DoctorController=require('../controller/doctor_controller');
var middleware=require('../bin/middleware');



router.get('/',function(req,res){
    res.send('its working properly')
})

router.post('/register',DoctorController.register);

router.post('/login',DoctorController.login);

router.post('/createPatient',DoctorController.createPatient)

router.post('/patcount',DoctorController.patcount);

router.post('/getallPatients',DoctorController.getAllPatients);


module.exports=router;