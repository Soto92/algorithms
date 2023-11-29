import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import * as fs from 'fs';
import multer from 'multer';
import path from 'path';
import { encryptFile } from '../src/fileShareCrypt';

const app = express();
const port = 3000;

const storage = multer.memoryStorage();

const upload = multer({ storage: storage });
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}
app.use(bodyParser.json());

let data: { [key: string]: string } = {};

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
});
app.get('/files', (req: Request, res: Response) => {
    res.send('Hello, World!');
});
app.get('/download/:filename', (req: Request, res: Response) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, 'uploads', filename);
    res.download(filePath, (err) => {
        if (err) {
            res.status(404).send('File not found');
        }
    });
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

app.post('/file/restore/:name', (req: Request, res: Response) => {
    const { key, value } = req.body;
    data[key] = value;
    res.send(`Data stored: ${key} - ${value}`);
});
app.delete('/file/:name', (req: Request, res: Response) => {
    const key = req.params.key;
    if (data.hasOwnProperty(key)) {
        delete data[key];
        res.send(`Data deleted: ${key}`);
    } else {
        res.status(404).send('Data not found');
    }
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});