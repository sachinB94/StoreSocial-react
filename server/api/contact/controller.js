const Contact = require('./model');

exports.add = (req, res, next) => {
  const userId = req.user._id;
  const { contact } = req.body;

  Contact.add(Object.assign({}, contact, { user: userId }))
    .then(contact => {
      req.data = contact;
      return next();
    })
    .catch(next);
};

exports.getContacts = (req, res, next) => {
  const userId = req.user._id;

  Contact.find({ user: userId })
    .then(contacts => {
      req.data = contacts;
      return next();
    })
    .catch(next);
};

exports.edit = (req, res, next) => {
  const { contactId } = req.params;
  const { contact } = req.body;

  Contact.findOneAndUpdate({ _id: contactId }, contact)
    .then(edited => {
      req.data = edited;
      return next();
    })
    .catch(next);
};

exports.delete = (req, res, next) => {
  const { contactId } = req.params;

  Contact.remove({ _id: contactId })
    .then(result => {
      req.data = result;
      return next();
    })
    .catch(next);
};
