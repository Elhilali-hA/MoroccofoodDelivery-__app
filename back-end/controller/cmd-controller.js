import models from '../models/index.js'
import AppException from '../exceptions/AppException.js'


class cmdController {

    async getonecmd(req, res) {
        
        try {
            const cmd = await models.cmd.findById(req.params.id).populate('repas_id').populate('user_id');
            res.status(202).json({
                status: 'success',
                data: {
                    cmd,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async getcmd(req, res) {
        try {
            let filter = {}
           if (req.query.name) filter.name = req.query.name;
           if (req.query.price) filter.price = req.query.price;
            const cmd = await models.cmd.find(filter).populate('repas_id').populate('user_id');
            res.status(202).json({
                status: 'success',
                data: {
                    cmd,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }


    async createcmd(req, res) {
        try {
            const newcmd = await models.cmd.create(req.body);
            res.status(202).json({
                status: 'success',
                data: {
                     newcmd,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

   

    async updatecmd(req, res) {

        try {
            const cmd = await models.cmd.findByIdAndUpdate(
                req.params.id,
                req.body, {
                    new: true,
                    runValidators: true,
                }
            );

            res.status(202).json({
                status: 'success',
                data: {
                    cmd,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async deletecmd(req, res) {
        try {
          const cmd = await models.cmd.findByIdAndDelete(req.params.id);
    
                res.status(202).json({
                    status: 'success',
                    data: {
                        cmd,
                    },
                });
            } catch (err) {
                throw new AppException(err, 400);
            }
    }






    async getone_assignedcmd(req, res) {
        
        try {
            const assignedcmd = await models.assigned_cmd.findById(req.params.id).populate('command_id').populate('livreur_id');
            res.status(202).json({
                status: 'success',
                
                assignedcmd,
            
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async get_assignedcmd(req, res) {
        try {
            const assigned_cmd = await models.assigned_cmd.find().populate('command_id').populate('livreur_id');
            res.status(202).json({
                status: 'success',
                
                    assigned_cmd,
                
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async create_assignedcmd(req, res) {
        try {
            const assigned_cmd = await models.assigned_cmd.create(req.body);
            res.status(202).json({
                status: 'success',
                
                assigned_cmd,
                
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async update_assignedcmd(req, res) {

        try {
            const assigned_cmd = await models.assigned_cmd.findByIdAndUpdate(
                req.params.id,
                req.body, {
                    new: true,
                    runValidators: true,
                }
            );

            res.status(202).json({
                status: 'success',
                
                assigned_cmd,
                
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }
    



}

export default new cmdController();