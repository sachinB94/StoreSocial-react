const mongoose = require('mongoose');
const Bluebird = require('bluebird');

const { isEmail, isMobile } = require('../../utils/validators');

const Schema = mongoose.Schema;

const ContactSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      validate: {
        validator: v => isEmail(v),
        message: '{VALUE} is not a valid Email'
      }
    },
    mobile: {
      type: String,
      validate: {
        validator: v => isMobile(v),
        message: '{VALUE} is not a valid Mobile'
      }
    }
  },
  {
    timestamps: true
  }
);

const Contact = mongoose.model('Contact', ContactSchema);

module.exports = {
  add: data => {
    const contact = new Contact(data);
    return new Bluebird((resolve, reject) => {
      contact.save().then(() => resolve(contact._doc || contact)).catch(reject);
    });
  },

  find: condition => Contact.find(condition).lean(),

  findOneAndUpdate: (condition, data) =>
    Contact.findOneAndUpdate(condition, data, { new: true }).lean(),

  remove: condition => Contact.remove(condition)
};
