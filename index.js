const User= require('./lib/models/users.js');
const to=require('await-to-js').default;
const util = require('util');


var exports=module.exports;

exports.register=async function(inputs) {
    
    
    const [err, user] =await to(User.create(inputs));
    if(err) return err;
    
    return user;

    
}



exports.autheticate= autheticate =async function(inputs) {
    let err,user,valid,verifyPassword
    [err,user]=await to(User.findOne({username:inputs.username}))
    if(err) return err;
    
    verifyPassword = util.promisify(user.verifyPassword.bind(user));
    [err,valid]= await to(verifyPassword(inputs.password));
    if(err) return err;

    if(valid) return user
    return "invalid";
    
}


exports.resetPassword=async function(inputs) {
  let err,user 
   [err,user]=await to(autheticate(inputs));
   if(err) return err;
   if(user==="invalid")return user;
   [err,user]=await to(User.findOneAndUpdate({username:inputs.username},{password:inputs.newpassword}));
   if(err) return err;
   return user;
    
}

exports.setSecurtyQuestions= function(inputs) {

    return "not yet implemented"
    
}

