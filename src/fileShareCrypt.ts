// (2) Build a FileShare System (save files, restore files, delete files, listFiles, Search) with encryption
// https://github.com/diegopacheco/tech-resources/blob/master/react-native-resources.md#ooad-challenges-round-2
import * as crypto from 'crypto';
import * as fs from 'fs';

const ENCRYPTION_ALGORITHM = 'aes-256-ctr';
const ENCRYPTION_KEY = '01234567890123456789012345678901';
const iv = Buffer.alloc(16, 0);

function encryptFile(inputFilePath: string, outputFilePath: string): void {
    const inputBuffer = fs.readFileSync(inputFilePath);
    const cipher = crypto.createCipheriv(ENCRYPTION_ALGORITHM, ENCRYPTION_KEY, iv);
    const encryptedBuffer = Buffer.concat([cipher.update(inputBuffer), cipher.final()]);
    fs.writeFileSync(outputFilePath, encryptedBuffer);
}

function decryptFile(inputFilePath: string, outputFilePath: string): void {
    const encryptedBuffer = fs.readFileSync(inputFilePath);
    const decipher = crypto.createDecipheriv(ENCRYPTION_ALGORITHM, ENCRYPTION_KEY, iv);
    const decryptedBuffer = Buffer.concat([decipher.update(encryptedBuffer), decipher.final()]);
    fs.writeFileSync(outputFilePath, decryptedBuffer);
}

// TXT File
const textInputPath = './cryptoAssets/input.txt';
const encryptedTextOutputPath = './cryptoAssets/encrypted.txt';
const decryptedTextOutputPath = './cryptoAssets/decrypted.txt';

encryptFile(textInputPath, encryptedTextOutputPath);
console.log('Text Encrypted and saved to:', encryptedTextOutputPath);
decryptFile(encryptedTextOutputPath, decryptedTextOutputPath);
console.log('Text Decrypted and saved to:', decryptedTextOutputPath);

// JPEG file
const imageInputPath = './cryptoAssets/input.png';
const encryptedImageOutputPath = './cryptoAssets/encrypted.png';
const decryptedImageOutputPath = './cryptoAssets/decrypted.png';

encryptFile(imageInputPath, encryptedImageOutputPath);
console.log('Image Encrypted and saved to:', encryptedImageOutputPath);
decryptFile(encryptedImageOutputPath, decryptedImageOutputPath);
console.log('Image Decrypted and saved to:', decryptedImageOutputPath);