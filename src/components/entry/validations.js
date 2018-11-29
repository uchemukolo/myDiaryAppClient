import Validator from 'validator';

const validateInput = (data) => {
  const errors = {};
  const errorMsg = 'This field is required';


  if (Validator.isEmpty(data.title)) {
    errors.title = errorMsg;
  }
  if (Validator.isEmpty(data.mood)) {
    errors.mood = errorMsg;
  }
  if (Validator.isEmpty(data.entry)) {
    errors.entry = errorMsg;
  } else if (data.entry.length < 6) {
    errors.entry = 'Your entry must not be less than 6 characters';
  }
  return {
    errors,
  };
};

export default validateInput;
