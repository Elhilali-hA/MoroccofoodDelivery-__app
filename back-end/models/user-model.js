import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
// import  isEmail  from 'validator'

const usersSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'user must have a name'],
      unique: true,
    }, 
    email: {
      type: String,
      required: [true, 'user must have a email'],
      unique: true,
      // validate: [isEmail, 'Please enter a valid email'] 
    },
    password: {
      type: String,
      required: [true, 'user must have a password'],
      minlength: 8,
      select: false,
    },
    // confirm_password: {
    //   type: String,
    //   required: [true, 'comfirm your password'],
    //   minlength: 8,
    //   select: false,
    // },
    role: {
      type: String,
      required: false,
      default: 'client',
      enum: ['client', 'admin', 'livreur', 'chef_secteur'],
  
      },
      created_at: {
          type: Date,
          default: Date.now(),
      },
      passwordChangedAt: {
          type: Date,
      },
      passwordResetToken: {
          type: String,
      },
      passwordResetExpires: {
          type: Date,
      },
  });

  usersSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
        next();
    }
});



usersSchema.virtual("cmd", {
  ref: "cmd",
  localField: "_id",
  foreignField: "user_id",
})

usersSchema.set("toObject", { virtuals: true })
usersSchema.set("toJSON", { virtuals: true })

export default usersSchema;