
/*
import { Schema, model, models } from "mongoose";

const HI_AssetsSchema = new Schema(
  { 
    selcode: {
      type: String,
      required: true,
    },
    card: {
      description: {
        type: String,
        required: true,
      },
      model: {
        type: String
      },
      image: {
        type: String,
      },
    },
    technical: {
      category: {
        type: String,
        required: false,
      },
      location: {
        type: String,
        required: false,
      },
      maker : {
        name: {
        type: String,
        },
        web: {
          type: String,
        },
      },
      model_number: {
        type: String,
        
      },
      serial_number: {
        type: String,
        
      },
      instructions: {
        type: String,
      
      },
      
    },
    finance: {
      purchase:{
        date: {
          type: Date,
          required: true,
        },
        location: {
          type: String
        },
        amount: {
          type: Number
        },
        note: {
          type: String
        },
        invoice: {
          type: String
        },
      },
      disposal:{
        date: {
          type: Date,
          required: true,
        },
        amount: {
          type: Number
        },
        note: {
          type: String
        },
       
      },
    },
    status: {
      type: String,
      required: true,
    },
    admin:{
      creation:{
        date: {
        type: Date,
        required: false,
      },
      user: {
        type: String,
      },
      },
      update:{
        date: {
        type: Date,
        required: false,
      },
      user: {
        type: String,
      },
      },
      
      },
   },
  {
    timestamps: true,
  },

);

const HI_Assets = models.HI_Assets || model("HI_Assets", HI_AssetsSchema);

export default HI_Assets;
*/