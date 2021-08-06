const controler={}
const model=require("../config/model/index")
const {Op} = require("sequelize");
const bcrypt=require('bcrypt')


// var pejs = require('pejs');
// var views = pejs();

controler.indexuser = async function(req,res){
    try {
      let template = await res.render('pages/index',{message:""});
    //  pejs.render('page/index.ejs',function(err,result){
    //     console.log(result)
    // });
      res.status(200)(
          template
      )
    } catch (error) {
        
    }
}


controler.registrasi = async function(req,res){
    try {
      let template = await res.render('pages/registrasi');
    //  pejs.render('page/index.ejs',function(err,result){
    //     console.log(result)
    // });
      res.status(200)(
          template
      )
    } catch (error) {
        
    }
}

controler.read = async function(req,res){
  try {
    // let template = await res.render('pages/read');
    // let data = await model.user.findAll()
  //  pejs.render('page/index.ejs',function(err,result){
  //     console.log(result)
  // });
    res.status(200)(
      model.user.findAll().then(function(dataa){res.render('pages/read',{data:dataa})})
    )
  } catch (error) {
      
  }
}

controler.edit = async function(req,res){
  try {
    console.log("satu")
   await model.user.findOne({where:{id:req.params.id},raw:true}).then(function(dataa){
      console.log("ini hasillll")
      if(!dataa){    
        res.render('pages/edit',{data:{}})    
      } else{    
        var x = JSON.stringify(dataa)    
        console.log(JSON.parse(x))    
        var temp=[];    
        temp.push(JSON.parse(x))    
        console.log('sd',temp)    
        res.render('pages/edit',{data:temp})    
      }  
    })
  } catch (error) {
    
  }
}

controler.update = async function(req,res){
 try {
  await model.user.update({
    password:req.body.password,
    adress:req.body.adress,
    adress2:req.body.adress2,
    city:req.body.city,
    state:req.body.state
 },{
   where:{
     id:req.body.id
   }
 }
 ).then(function(data){res.redirect('/read')})
 } catch (error) {
   
 }
}

controler.delete = async function(req,res){
  try {
     let user=model.user.destroy({
       where:{
         id:req.params.id
       }
     }).then(function(data){res.redirect('/read')})
  } catch (error) {
    
  }
}

controler.deleteAll= async function(req, res){
  try {
    await model.user.destroy({
      where:{},
      truncate: true
    }).then(function(data){res.redirect('/read')})
  } catch (error) {
    
  }
}


controler.login=async function(req,res){
  try {
    if(!req.body.email || !req.body.password){
      let template = await res.render('pages/index',{message:"Please enter both id and password"});
    }
    else{
     data = await model.user.findAll({
       where:{
              email:"jekomontainugrah@gmail.com"
       }
      })
     console.log("datakuuuu",data) 
     console.log("emaiilllll:",data[0].dataValues.email)
     if(data[0].dataValues.email==req.body.email){
      const compiredata= await bcrypt.compare(req.body.password,data[0].dataValues.password);
      console.log("compiredataaaa:",compiredata)
      if(compiredata){
       res.redirect("/read")
      }else{
        let template = await res.render('pages/index',{message:"chekpassword"});
      }
     }else{
      let template = await res.render('pages/index',{message:"check your email"});
     } 
      
    }  
  } catch (error) {
    
  }
  
}



module.exports=controler;