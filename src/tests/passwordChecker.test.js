const validatePassword = require('../services/passwordChecker');

test('valid password', () => {
  expect(validatePassword('Valid@123')).toBe(true);
});

test('password too short', () => {
  expect(validatePassword('Val@1')).toBe(false);
});

test('missing special character', () => {
  expect(validatePassword('Valid1234')).toBe(false);
});

test('missing digit', () => {
  expect(validatePassword('Valid@word')).toBe(false);
});

test('contains IPL', () => {
  expect(validatePassword('IPL@1234')).toBe(false);
});

test('contains IPL in different cases', () => {
  expect(validatePassword('iPl@1234')).toBe(false);
});
