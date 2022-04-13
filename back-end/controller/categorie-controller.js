import models from '../models/index.js'
import AppException from '../exceptions/AppException.js'


class categorieController {

    async getonecategorie(req, res) {
        
        try {
            const categorie = await models.categorie.findById(req.params.id).populate({ path : 'repas'});
            res.status(202).json({
                status: 'success',
                data: {
                    categorie,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async getcategories(req, res) {
        try {
            let filter = {}
           if (req.query.name) filter.name = req.query.name;
            const categorie = await models.categorie.find(filter).populate({ path : 'repas'});
            res.status(202).json({
                status: 'success',
                data: {
                    categorie,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async createcategorie(req, res) {
        try {
            const categorie = await models.categorie.create(req.body);
            res.status(202).json({
                status: 'success',
                data: {
                    categories: categorie,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async updatecategorie(req, res) {

        try {
            const categorie = await models.categorie.findByIdAndUpdate(
                req.params.id,
                req.body, {
                    new: true,
                    runValidators: true,
                }
            );

            res.status(202).json({
                status: 'success',
                data: {
                    categorie,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async deletecategorie(req, res) {
        try {
          const categorie = await models.categorie.findByIdAndDelete(req.params.id);
    
                res.status(202).json({
                    status: 'success',
                    data: {
                        categorie,
                    },
                });
            } catch (err) {
                throw new AppException(err, 400);
            }
    }
    



}

export default new categorieController();