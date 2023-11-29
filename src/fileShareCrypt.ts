// (2) Build a FileShare System (save files, restore files, delete files, listFiles, Search) with encryption
// https://github.com/diegopacheco/tech-resources/blob/master/react-native-resources.md#ooad-challenges-round-2
import * as crypto from 'crypto';
import * as fs from 'fs';

const ENCRYPTION_ALGORITHM = 'aes-256-ctr';
const ENCRYPTION_KEY = '01234567890123456789012345678901';
const iv = Buffer.alloc(16, 0);

export function encryptFile(file): Buffer {
    const cipher = crypto.createCipheriv(ENCRYPTION_ALGORITHM, Buffer.from(ENCRYPTION_KEY), iv);
    const encryptedBuffer = Buffer.concat([
        cipher.update(file),
        cipher.final(),
    ]);
    return encryptedBuffer;
}

export function decryptFile(inputFilePath: string, outputFilePath: string): void {
    const encryptedBuffer = fs.readFileSync(inputFilePath);
    const decipher = crypto.createDecipheriv(ENCRYPTION_ALGORITHM, ENCRYPTION_KEY, iv);
    const decryptedBuffer = Buffer.concat([decipher.update(encryptedBuffer), decipher.final()]);
    fs.writeFileSync(outputFilePath, decryptedBuffer);
}

export function listFilesInDirectory(directoryPath: string): string[] {
    const files = fs.readdirSync(directoryPath);
    return files.filter(file => !file.endsWith('.deleted')
    );
}

export function editTextFile(filePath: string, newText: string): void {
    fs.writeFileSync(filePath, newText);
}

export function deleteFile(filePath: string): void {
    const deletedFilePath = filePath + '.deleted';
    fs.renameSync(filePath, deletedFilePath);
}

export function restoreFile(deletedFilePath: string, originalFilePath: string): void {
    fs.renameSync(deletedFilePath, originalFilePath);
}

