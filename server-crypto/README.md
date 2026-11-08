# server-crypto

A small Express + TypeScript API that stores files encrypted at rest. It is the HTTP layer on top of the encryption helpers in [`../src/2026/fileShareCrypt.ts`](../src/2026/fileShareCrypt.ts).

## What it demonstrates

- Uploading a file into memory with **Multer**.
- Encrypting the file with **AES-256-CTR** before writing it to disk.
- Decrypting only when the file is downloaded.
- **Soft delete**: a delete renames the file to `<name>.deleted` instead of destroying it.
- **Restore**: renaming the soft-deleted file back to its original name.
- Listing, editing and downloading encrypted files.

## Endpoints

| Method | Path | Purpose |
| --- | --- | --- |
| `GET` | `/` | Health check (`Hello, World!`). |
| `GET` | `/files` | List stored files (ignores `.deleted` files). |
| `POST` | `/upload` | Multipart upload (`file` field); encrypts and saves as `encrypted_<original-name>`. |
| `PUT` | `/editFile/:fileName` | Re-encrypts `body.newText` into an existing file. |
| `DELETE` | `/deleteFile/:fileName` | Soft-deletes by renaming to `<fileName>.deleted`. |
| `PUT` | `/restoreFile/:fileName` | Restores `<fileName>.deleted`. |
| `GET` | `/download/:filename` | Decrypts to a temporary file, sends it, then deletes the temporary copy. |

## Files

| File | Purpose |
| --- | --- |
| `server.ts` | Express application and routes. |
| `Crypto Files.postman_collection.json` | Ready-made requests for the whole flow. |
| `uploads/` | Runtime storage for encrypted files (see its README). |

## Security notes (important)

This is a learning project, not production encryption:

- The key and IV are hard-coded in `fileShareCrypt.ts`.
- AES-CTR provides confidentiality only; it does not authenticate data (no MAC/AEAD).
- There is no authentication or authorization on the endpoints.
- File names are taken from user input, so path traversal must be handled before exposing this publicly.

For real systems use AES-256-GCM (or another AEAD mode), a secret manager, random per-file IVs, and authenticated access control.

## Running

From the repository root:

```bash
npm install
npm start           # runs: npx ts-node server-crypto/server.ts
```

The server listens on `http://localhost:3000`.

> Note: `server.ts` imports `../src/fileShareCrypt`, while the helper in this repository lives at `../src/2026/fileShareCrypt`. Adjust the import path (or move the file) if TypeScript reports that the module cannot be found.

## Example flow

```bash
curl -F "file=@cryptoAssets/input.txt" http://localhost:3000/upload
curl http://localhost:3000/files
curl -OJ http://localhost:3000/download/encrypted_input.txt
```
