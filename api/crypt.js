var bcrypt = require('bcryptjs');
var hash = function (str) {
    var salt = bcrypt.genSaltSync(12);
    var hash = bcrypt.hashSync(str, salt);
    return hash;
};
var compare = function (str, hash) {
    return bcrypt.compareSync(str, hash);
};
module.exports = { hash: hash, compare: compare };
