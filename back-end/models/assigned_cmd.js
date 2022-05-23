import mongoose from 'mongoose';

const assigned_cmdSchema = new mongoose.Schema({
    command_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'cmd',
    }, 
    status: {
      type: String,
      default: 'Pending',
      enum: ['Pending', 'road to deliver', 'Delivered']
    },
    livreur_id:{
        type: mongoose.Schema.ObjectId,
        ref: 'livreur',
    }
    ,
      created_at: {
          type: Date,
          default: Date.now(),
      }
   
    
  });



export default assigned_cmdSchema;