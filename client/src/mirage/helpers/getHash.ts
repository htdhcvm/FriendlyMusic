import bcrypt from 'bcryptjs';

export default function getHash(password: string): Promise<string> {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, 10, (err, result) => {
            if (err) return reject(err);
            return resolve(result);
        });
    });
}
