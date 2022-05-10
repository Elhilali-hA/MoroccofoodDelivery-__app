import mongoose from 'mongoose';

const commandSchema = new mongoose.Schema({
    repas_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'repas',
    }, 
    status: {
      type: Boolean,
      default: false,
    },
    user_id:{
        type: mongoose.Schema.ObjectId,
        ref: 'users',
    },
      created_at: {
          type: Date,
          default: Date.now(),
      }
    
  });

  commandSchema.virtual('assigned_cmd', {
    ref: 'assigned_cmd',
    localField: '_id',
    foreignField: 'command_id',
    justOne: true
});

commandSchema.set('toObject', { virtuals: true });
commandSchema.set('toJSON', { virtuals: true });



export default commandSchema;