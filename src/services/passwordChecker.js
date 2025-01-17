function validatePassword(password) {
    const hasMinLength = password.length >= 8;
    return hasMinLength;
}

module.exports = validatePassword;