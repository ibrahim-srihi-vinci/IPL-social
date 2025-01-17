const validatePassword = require('../services/passwordChecker');

test('valid password', () => {
    expect(validatePassword('Valid@123')).toBe(true);
});