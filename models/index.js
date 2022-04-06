import mongoose from 'mongoose';
import usersShema from './user-model.js';


mongoose
    .connect(process.env.DATABASE_LOCAL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    })
    .then(() => {
        console.log('connection 👌');
    });
    
const models = {};

models.users = mongoose.model('users', usersShema);




export default models;