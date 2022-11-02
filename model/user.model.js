import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: String,
    email: {
        type: String
    },
    password: {
        type: String,
        required: true
    },

    age: Number,

    phone: Number,


})

const userModel = mongoose.model('user', userSchema);


export default userModel;