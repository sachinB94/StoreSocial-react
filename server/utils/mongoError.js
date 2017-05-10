const getUniqueErrorMessage = ({ errmsg }) => {
  let output;
  try {
    const fieldName = errmsg.substring(
      errmsg.lastIndexOf('.$') + 2,
      errmsg.lastIndexOf('_1')
    );
    output = `${fieldName
      .charAt(0)
      .toUpperCase()}${fieldName.slice(1)} already exists`;
  } catch (ex) {
    output = 'Unique field already exists';
  }
  return output;
};

exports.getMongoError = err => {
  let message = '';
  if (err.code) {
    switch (err.code) {
      case 11000:
      case 11001:
        message = getUniqueErrorMessage(err);
        break;
      default:
        message = 'Something went wrong.';
    }
  } else {
    Object.keys(err.errors).forEach(errName => {
      if (err.errors[errName].message) {
        message = err.errors[errName].message;
        if (message.indexOf('is required') !== -1) {
          message = message.slice(message.indexOf('`'));
        }
      }
    });
  }

  return { message, status: 400, error: err };
};
