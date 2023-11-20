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

function listFilesInDirectory(directoryPath: string): string[] {
    const files = fs.readdirSync(directoryPath);
    return files.map(file => {
        const isDeleted = file.endsWith('.deleted');
        return {
            name: file,
            isDeleted: isDeleted
        };
    });
}

function editTextFile(filePath: string, newText: string): void {
    fs.writeFileSync(filePath, newText);
}

function deleteFile(filePath: string): void {
    const deletedFilePath = filePath + '.deleted';
    fs.renameSync(filePath, deletedFilePath);
}

function restoreFile(deletedFilePath: string, originalFilePath: string): void {
    fs.renameSync(deletedFilePath, originalFilePath);
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

// Edit
const textFilePath = 'edited.txt';
const newText = 'Edited content';
editTextFile(textFilePath, newText);
console.log('Text File Edited and saved to:', textFilePath);

// Delete
const fileToDelete = 'fileToDelete.txt';
fs.writeFileSync(fileToDelete, 'Content to delete');
console.log('File to Delete Created:', fileToDelete);

deleteFile(fileToDelete);
console.log('File Soft Deleted:', fileToDelete);

// Restore
const deletedFilePath = fileToDelete + '.deleted';
restoreFile(deletedFilePath, fileToDelete);
console.log('File Restored:', fileToDelete);

// List files again (including deleted files)
const updatedFilesInDirectory = listFilesInDirectory('./cryptoAssets');
console.log('Updated Files in Directory:', updatedFilesInDirectory);