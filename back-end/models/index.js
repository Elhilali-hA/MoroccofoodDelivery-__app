import mongoose from 'mongoose';
import usersSchema from './user-model.js';
import livreurSchema from './livreur.js';
import chef_secteurSchema from './chef_secteur.js'
import restaurantsSchema from './restaurants.js'
import categorieSchema from './categorie.js'
import repasSchema from './repas.js'
import commandSchema from './commande.js'
import assigned_cmdSchema from './assigned_cmd.js'


mongoose
    .connect(process.env.DATABASE_LOCAL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,})
    .then(() => {
        console.log('connection 👌');
    });
    
const models = {};

models.users = mongoose.model('users', usersSchema);
models.livreur = mongoose.model('livreur', livreurSchema);
models.chef_secteur = mongoose.model('chef_secteur', chef_secteurSchema);
models.restaurants = mongoose.model('restaurants', restaurantsSchema);
models.repas = mongoose.model('repas', repasSchema);
models.categorie = mongoose.model('categorie', categorieSchema);
models.cmd = mongoose.model('cmd', commandSchema);
models.assigned_cmd = mongoose.model('assigned_cmd', assigned_cmdSchema);










export default models;