"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const check = {
    isValidUser: (user) => {
        const regexNickname = /^\w[^\d]{2}[\w\d&_@#~\\\\-]{0,14}$/u;
        const regexPassword = /^\S*(?=\S{8,})(?=\S*\w)(?=\S*[\d])(?=\S*[&'\-_$\\%!@?])\S*$/u;
        const regexEmail = /.*/;
        const regexBirthday = /.*/;
        const regexPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/u;
        const nickname = user.nickname;
        const password = user.password;
        const email = user.email;
        const birthday = user.birthday;
        const phone = user.phone;
        let isValid = true;
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
    },
};
exports.default = check;
