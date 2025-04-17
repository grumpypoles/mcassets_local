/*

import { Schema, model, models } from "mongoose";

const HI_UsersSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists'],
        required: [true, 'Email is required']
    },
    username: {
        type: String,
        required: [true, 'Username is required']
    },
    image: {
        type: String
    }
}, 
{
    timestamps: true
})

const HI_Users = models.HI_Users || model('HI_Users', HI_UsersSchema)

export default HI_Users 
*/