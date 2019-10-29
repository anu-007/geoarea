const {
  ValidateLogin,
} = require('../../config/validatorSchema');

const {
  ValidationError,
} = require('../utils/errors');

const login = (req, res, next) => {
  const { error, value } = ValidateLogin.validate(req.body);
  if (error) {
    next(new ValidationError('Inputs do not meet criteria'));
    return;
  }
  req.parsed = value;
  next();
};

module.exports = {
  login,
};
