const express=require("express");
const router=express.Router();

const controler=require('../controler/index')

router.get('/',controler.one.one);
router.get('/index',controler.user.indexuser);
router.post('/postData',controler.crud.postDta);
router.get('/registrasi',controler.user.registrasi);
router.post('/registrasicrud',controler.crud.registrasicrud);
router.get('/read',controler.user.read);
router.get('/edit/:id',controler.user.edit);
router.post('/update',controler.user.update);
router.get('/delete/:id',controler.user.delete);
router.get('/deleteAll',controler.user.deleteAll);
router.post('/login',controler.user.login);



module.exports=router;