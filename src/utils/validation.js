// utils/validation.js
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePhone = (phone) => {
  const re = /^(\+62|62|0)8[1-9][0-9]{6,9}$/;
  return re.test(phone);
};
// src/utils/validation.js