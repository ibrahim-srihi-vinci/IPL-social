const validatePassword = require('../services/passwordChecker');

test('valid password', () => {
    expect(validatePassword('Valid@123')).toBe(true);
});

test('password too short', () => {
    expect(validatePassword('Val@1')).toBe(false);
});