const user=require("./user")
const crud=require("./crud")
const one=require("./one")

const controler={}

controler.user=user;
controler.crud=crud;
controler.one=one;

module.exports=controler;