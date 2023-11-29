import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import * as fs from 'fs';
import multer from 'multer';
import path from 'path';
import { decryptFile, deleteFile, editFileContent, encryptFile, listFilesInDirectory, restoreFile } from '../src/fileShareCrypt';

const app = express();
const port = 3000;

const storage = multer.memoryStorage();

const upload = multer({ storage: storage });
const uploadDir = path.join(__dirname, 'uploads');

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
});

app.get('/files', (req: Request, res: Response) => {
    const files = listFilesInDirectory(uploadDir);
    res.json(files);
});

app.put('/editFile/:fileName', (req: Request, res: Response) => {
    const fileName = req.params.fileName;
    const filePath = path.join(uploadDir, fileName);
    if (fs.existsSync(filePath)) {
        const newText = req.body.newText;
        editFileContent(filePath, newText);
        res.send('File content edited successfully.');
    } else {
        res.status(404).send('File not found.');
    }
});

app.post('/upload', upload.single('file'), (req: Request, res: Response) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    const encryptedBuffer = encryptFile(req.file.buffer);
    const encryptedFilePath = path.join(uploadDir, 'encrypted_' + req.file.originalname);
    fs.writeFile(encryptedFilePath, encryptedBuffer, (err) => {
        if (err) {
            console.error('Error saving the encrypted file:', err);
            return res.status(500).send('Error saving the encrypted file.');
        }
        res.send('File uploaded, encrypted, and saved!');
    });
});

app.put('/restoreFile/:fileName', (req: Request, res: Response) => {
    const fileName = req.params.fileName;
    const deletedFilePath = path.join(uploadDir, fileName + '.deleted');
    const originalFilePath = path.join(uploadDir, fileName);

    if (fs.existsSync(deletedFilePath)) {
        restoreFile(deletedFilePath, originalFilePath);
        res.send('File restored successfully.');
    } else {
        res.status(404).send('Deleted file not found.');
    }
});

app.delete('/deleteFile/:fileName', (req: Request, res: Response) => {
    const fileName = req.params.fileName;
    const filePath = path.join(uploadDir, fileName);

    if (fs.existsSync(filePath)) {
        deleteFile(filePath);
        res.send('File deleted successfully.');
    } else {
        res.status(404).send('File not found.');
    }
});

app.get('/download/:filename', (req: Request, res: Response) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, 'uploads', filename);
    const decryptedFilePath = path.join(__dirname, 'uploads', 'decrypted_' + filename);
    // Decrypt the file and then return it
    decryptFile(filePath, decryptedFilePath);
    res.download(decryptedFilePath, (err) => {
        if (err) {
            res.status(404).send('File not found');
        } else {
            fs.unlinkSync(decryptedFilePath);
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});