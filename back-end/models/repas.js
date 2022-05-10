import mongoose from 'mongoose';

const repasSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'reapas must have a name'],
   
    }, 
    description: {
      type: String,
      required: [true, 'repas must have a email'],
     
    },
    categorie_id:{
        type: mongoose.Schema.ObjectId,
        ref: 'categorie',
    },
    restaurant_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'restaurants',
        required: [true],
    },
    price:{
        type: Number,
        required: [true, 'repas must have a email'],
        
    },
      created_at: {
          type: Date,
          default: Date.now(),
      }
    
  });

  repasSchema.virtual("cmd", {
    ref: "cmd",
    localField: "_id",
    foreignField: "repas_id",
  })

repasSchema.set("toObject", { virtuals: true })
repasSchema.set("toJSON", { virtuals: true })


export default repasSchema;