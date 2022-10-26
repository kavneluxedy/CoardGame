module.exports = {
    isValidUser: function (user) {
        var regexNickname = /^\w[^\d]{2}[\w\d&_@#~\\\\-]{0,14}$/u;
        var regexPassword = /^\S*(?=\S{8,})(?=\S*\w)(?=\S*[\d])(?=\S*[&'\-_$\\%!@?])\S*$/u;
        var regexEmail = /.*/;
        var regexBirthday = /.*/;
        var regexPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/u;
        var nickname = user.nickname;
        var password = user.password;
        var email = user.email;
        var birthday = user.birthday;
        var phone = user.phone;
        var isValid = true;
        if (nickname) {
            regexNickname.test(nickname)
                ? ""
                : (isValid = false);
        }
        if (password) {
            regexPassword.test(password)
                ? ""
                : (isValid = false);
        }
        if (email) {
            regexEmail.test(email)
                ? ""
                : (isValid = false);
        }
        if (birthday) {
            regexBirthday.test(birthday)
                ? ""
                : (isValid = false);
        }
        if (phone) {
            regexPhone.test(phone)
                ? ""
                : (isValid = false);
        }
        return isValid;
    }
};
