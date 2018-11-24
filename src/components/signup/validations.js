import Validator from 'validator';

const validateInput = (data) => {
  const errors = {};
  const errorMsg = 'This field is required';

  if (Validator.isEmpty(data.username)) {
    errors.username = errorMsg;
  } else if (data.username.length < 5) {
    errors.username = 'Username needs to be longer than 5 characters';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = errorMsg;
  } else if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = errorMsg;
  } else if (data.password.length < 6) {
    errors.password = 'Your password needs to be longer than 6 characters';
  }
  if (Validator.isEmpty(data.confirmPassword)) {
    errors.confirmPassword = errorMsg;
  } else if (data.password !== data.confirmPassword) {
    errors.confirmPassword = 'Your password does not match';
  }

  return {
    errors,
  };
};

export default validateInput;
