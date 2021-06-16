import bcrypt from 'bcryptjs';

interface Prop {
    password: string;
    hash: string;
}

export default function comparePasswords({ password, hash }: Prop) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hash, (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
}
