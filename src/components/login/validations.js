import Validator from 'validator';

const validateInput = (data) => {
  const errors = {};
  const errorMsg = 'This field is required';

  if (Validator.isEmpty(data.email)) {
    errors.email = errorMsg;
  } else if (!Validator.isEmail(data.email)) {
    errors.email = 'Your email is invalid';
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = errorMsg;
  } else if (data.password.length < 8) {
    errors.password = 'Your password must not be lass than 8 characters';
  }

  return {
    errors,
  };
};
export default validateInput;
