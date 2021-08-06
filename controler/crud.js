const controler={}
const model=require('../config/model/index')
const bcrypt=require('bcrypt')

controler.postDta = async function(req,res,next){
    try {
        console.log("username :" + req.body.username);
        console.log("password :" + req.body.password);
        res.redirect('/index');
    } catch (error) {
        
    }
}

controler.registrasicrud = async function(req,res,next){
    try {
        console.log("email :" + req.body.email);
        console.log("password :" + req.body.password);
        console.log("adress :" + req.body.adress);
        console.log("adress2 :" + req.body.adress2);
        console.log("city :" + req.body.city);
        console.log("state :" + req.body.state);

        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        
        let user= await model.user.create({
            email:req.body.email,
            password:hashedPassword,
            adress:req.body.adress,
            adress2:req.body.adress2,
            city:req.body.city,
            state:req.body.state    
        });
        res.redirect('/index');
    } catch (error) {
        
    }
}


controler.delete = async function(req,res){
    let data= await model.user.destroy({
        where:{
            email:req.params.email
        }
    });
    res.redirect('/index');
}





module.exports=controler;