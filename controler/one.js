const controler={}

controler.one = async function(req,res){
    try {
        res.redirect('/index');
    } catch (error) {
        
    }
}

module.exports=controler;