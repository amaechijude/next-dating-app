import argon2 from 'argon2';

export async function hashPassword(password: string)  {
    try {
        const hash = await argon2.hash(password);
        return hash;
    }
    catch (err) {
        console.error(err);
        throw err;
    }
}

export async function verifyPassword(password: string, hash: string) {
    try {
        if (await argon2.verify(hash, password)) {
            return true;
        }
        return false
    }
    catch(err) {
        throw err;
        return false;
    }
}
