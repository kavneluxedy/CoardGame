import bcrypt from 'bcryptjs';

const crypt = {

    hash: (str: string) => {
        let salt = bcrypt.genSaltSync(12);
        let hash = bcrypt.hashSync(str, salt);
        
        return hash;
    },
    
    compare: (str: string, hash: string): boolean => {
        console.log(typeof str, typeof hash, "crypt");
        return bcrypt.compareSync(str, hash);
    }
}

export default crypt