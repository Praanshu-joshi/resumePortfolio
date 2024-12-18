const express= require('express')

const homeController=require('../controllers/homeController.js')
const router=express.Router()

router.use('/',homeController);

// exporting router
module.exports=router;