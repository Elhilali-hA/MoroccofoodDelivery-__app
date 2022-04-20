import models from '../models/index.js'
import AppException from '../exceptions/AppException.js'
import AuthService from '../services/auth-service.js';


class usersController {

    async getuser(req, res) {
        
        try {
            const users = await models.users.findById(req.params.id);
            res.status(202).json({
                status: 'success',
                data: {
                    users,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async getusers(req, res) {
        try {
            let filter = {}
           if (req.query.name) filter.name = req.query.name;
           if (req.query.role) filter.role = req.query.role;
            const users = await models.users.find();
            res.status(202).json({
                status: 'success',
                data: {
                    users,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async createuser(req, res) {
        try {
            const newusers = await models.users.create(req.body);
            res.status(202).json({
                status: 'success',
                data: {
                    users: newusers,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async updateusers(req, res) {

        try {
            const users = await models.users.findByIdAndUpdate(
                req.params.id,
                req.body, {
                    new: true,
                    runValidators: true,
                }
            );

            res.status(202).json({
                status: 'success',
                data: {
                    users,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async deleteusers(req, res) {
        try {
          const users = await models.users.findByIdAndDelete(req.params.id);
    
                res.status(202).json({
                    status: 'success',
                    data: {
                        users,
                    },
                });
            } catch (err) {
                throw new AppException(err, 400);
            }
    }

    async profile (req, res)  {
        const user = await models.users.findById(req.user._id);

        console.log(user._id);
      
        if (user) {
          user.name = req.body.name || user.name;
          user.email = req.body.email || user.email;
          
          if (req.body.password) {
            user.password = req.body.password;
          }
      
          const updatedUser = await user.save();
          const payload = { id: updatedUser._id, email: updatedUser.email, name: updatedUser.name};
          console.log(payload);
          const newtoken = await  AuthService.generateToken(payload);
          res.status(202).json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            token:newtoken,
          });
        } else {
          res.status(404);
          throw new Error("User Not Found");
        }
      }
    



}

export default new usersController();