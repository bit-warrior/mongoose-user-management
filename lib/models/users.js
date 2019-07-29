const mongoose = require('mongoose');
const bcrypt =require('mongoose-bcrypt');
const timestamps =require('mongoose-timestamp');


const UserSchema = new mongoose.Schema({

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




})


UserSchema.plugin(bcrypt);
UserSchema.plugin(timestamps);


UserSchema.index({ email: 1, username: 1 });
module.exports= mongoose.model('User', UserSchema);