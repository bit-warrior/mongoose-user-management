# mongoose-user-management
This library provides API to register , authenticate and manage the user for a  typical wesite. This stores the data in Mongodb.
Mongoose is used as ODM. Rightnow , its has three implemented methods

1)register
2)Autheticate
3)resetPassword

User schema is as Below
````
{

    email: {
        type: String,
        lowercase: true,
        trim: true,
        index: true,
        unique: true,
        required: true
    },

    username: {
        type: String,
        lowercase: true,
        trim: true,
        index: true,
        unique: true,
        required: true
    },

    password: {
        type: String,
        required: true,
        bcrypt: true
    },

    firstName: {
        type: String,
        trim: true
    },

    lastName: {
        type: String,
        trim: true
    },

    middleName: {
        type: String,
        trim: true
    },

    identificationNumber: {
        type: String,
        bcrypt: true,
        trim: true
    },

    phoneNumber1: {
        type: String,
        trim: true
    },

    phoneNumber2: {
        type: String,
        trim: true
    },

    address: {

        address1:{
            type: String,
            trim: true

            },
        address2:{
            type: String,
            trim: true

        },
        zip:{
            type: String,
            trim: true

        },
        state:{
            type: String,
            trim: true

        },
        city:{
            type: String,
            trim: true

        },
        country:{
            type: String,
            trim: true

        }

         

    }

}
````

Sample code is as below

````
const user=require('mongoose-user-management')
const mongoose = require('mongoose');

let fakeuser=let fake={
            email:"test@test.com",
            username:"test",
            password:"sddada",
            firstName: "Manish",
            lastName: "Ranjan",
            middleName:"mi",
            identificationNumber:"55555",
            phoneNumber1:"5555555",
            phoneNumber2:"ffffffffffff",
            address:{
                address1:"101 Metlife Way",
                address2:"Test way",
                zip:"27513",
                state:"NC",
                city:"Cary",
                country:"USA"
            }
}

(async function(){

await mongoose.connect("mongodb://localhost:27017/mydb", { useNewUrlParser: true }); 
    mongoose.connection
        .once('open', () => console.log('Connected!'))
        .on('error', (error) => {
            console.warn('Error : ',error);
        });


user.register(fake)
})();

````

