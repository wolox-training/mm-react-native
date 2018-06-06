export const required = value => (value ? undefined : 'Value is required');

export const minLength = value =>
  value.length < 8 ? 'Value must be at least 8 characters length' : undefined;

export const email = value => {
  const mailRegex = /^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
  return !mailRegex.test(String(value).toLowerCase()) ? 'Enter a valid email address' : undefined;
};
