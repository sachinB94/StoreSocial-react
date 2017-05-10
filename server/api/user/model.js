const mongoose = require('mongoose');
const Bluebird = require('bluebird');

const { isEmail } = require('../../utils/validators');

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: v => v && isEmail(v),
        message: '{VALUE} is not a valid Email'
      }
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model('User', UserSchema);

module.exports = {
  findOne: condition => User.findOne(condition).lean(),

  add: data => {
    const user = new User(data);
    return new Bluebird((resolve, reject) => {
      user.save().then(() => resolve(user._doc || user)).catch(reject);
    });
  }
};
