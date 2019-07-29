let chai = require('chai');
let should = chai.should();
let fakeUser=require('./fakeUser.js')
let User=require('../index.js')
const mongoose = require('mongoose');
const expect = chai.expect
chai.use(require('chai-as-promised'))



before(async () => {  
    await mongoose.connect("mongodb://localhost:27017/mydb", { useNewUrlParser: true }); 
    mongoose.connection
        .once('open', () => console.log('Connected!'))
        .on('error', (error) => {
            console.warn('Error : ',error);
        });
    await mongoose.connection.collection('users').drop()    
})

after(async () => {  
    await mongoose.connection.close();
  })
describe('create a user',() => {
    it('it should create a user', async () => {
    let res=await User.register(fakeUser)
    res.email.should.equal('test@test.com')
    res.username.should.equal('test')
    
    });

});

describe('Duplicate user should not be created',() => {
    it('it should not create a user and throw an error', async () => {
    await expect(User.register(fakeUser)).to.be.rejectedWith;
    
    });

});


describe('Authenticate existing user',() => {
    it('It should validate the user using userid and and right password', async () => {
    let res= await User.autheticate({username:"test",password:"sddada"});
    res.username.should.equal('test')
    
    });

    it('It should not validate the user using userid and wrong password', async () => {
        let res= await User.autheticate({username:"test",password:"sddada11"});
        res.should.equal('invalid')
        
        });

});

describe('Reset password',() => {
    it('it should reset a new password', async () => {
    let res=await User.resetPassword({username:"test",password:"sddada",newpassword:"ssssssss"})
    res.email.should.equal('test@test.com')
    res.username.should.equal('test')
    
    });

    it('aunthenticate with new password', async () => {
        let res= await User.autheticate({username:"test",password:"ssssssss"});
        res.username.should.equal('test')

});

it('aunthenticate with worng password', async () => {
    let res= await User.autheticate({username:"test",password:"sssssssssssss"});
    res.should.equal('invalid')

});

});