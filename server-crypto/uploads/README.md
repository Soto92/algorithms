# uploads

Runtime storage for the crypto server. Files here are produced by `../server.ts`; they are not hand-written source code.

## Naming conventions

| Name | Meaning |
| --- | --- |
| `encrypted_<original-name>` | Ciphertext written after a successful `/upload`. |
| `<name>.deleted` | Soft-deleted file; can be restored with `/restoreFile/:fileName`. |
| `decrypted_<name>` | Temporary plaintext created during `/download`; removed after the response is sent. |

`encrypted_input.txt` is a sample ciphertext produced from `../../cryptoAssets/input.txt` using the demo key and IV.

Because this folder holds generated data, treat its contents as disposable. Add real uploads to `.gitignore` if you use the server with sensitive files.
