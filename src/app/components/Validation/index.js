export const required = value => (value ? undefined : 'Value is required');

export const minLength = value =>
  value.length < 8 ? 'Value must be at least 8 characters length' : undefined;

export const email = value => {
  const mailRegex = /\S+@\S+\.\S+/;
  return !mailRegex.test(String(value).toLowerCase()) ? 'Enter a valid email address' : undefined;
};
