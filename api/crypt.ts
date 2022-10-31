const bcrypt = require('bcryptjs')

const hash = (str: string) => {
    let salt = bcrypt.genSaltSync(12);
    let hash = bcrypt.hashSync(str, salt);

    return hash;
}

const compare = (str: string, hash: string): boolean => {
    console.log(typeof str, typeof hash, "crypt");
    return bcrypt.compareSync(str, hash);
}

module.exports = { hash, compare }