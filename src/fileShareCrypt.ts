// (2) Build a FileShare System (save files, restore files, delete files, listFiles, Search) with encryption
// https://github.com/diegopacheco/tech-resources/blob/master/react-native-resources.md#ooad-challenges-round-2

import * as crypto from 'crypto';

const ENCRYPTION_ALGORITHM = 'aes-256-ctr';
const ENCRYPTION_KEY = '01234567890123456789012345678901'
const iv = Buffer.alloc(16, 0);

function encrypt(text: string): string {
    const cipher = crypto.createCipheriv(ENCRYPTION_ALGORITHM, ENCRYPTION_KEY, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

function decrypt(encrypted: string): string {
    const decipher = crypto.createDecipheriv(ENCRYPTION_ALGORITHM, ENCRYPTION_KEY, iv);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

const originalString = 'Mauricio Soto';
const encryptedString = encrypt(originalString);

console.log('Original String:', originalString);
console.log('Encrypted String:', encryptedString);

const decryptedString = decrypt(encryptedString);
console.log('Decrypted String:', decryptedString);