import mongoose from 'mongoose';


const categorieSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'categorie must have a name'],
    }, 
    description: {
      type: String,
      required: [true, 'categorie must have a description'],
    },
      created_at: {
          type: Date,
          default: Date.now(),
      }
    
  });

categorieSchema.virtual('repas', {
    ref: 'repas',
    localField: '_id',
    foreignField: 'categorie_id',
    justOne: true
});

categorieSchema.set('toObject', { virtuals: true });
categorieSchema.set('toJSON', { virtuals: true });

export default categorieSchema;