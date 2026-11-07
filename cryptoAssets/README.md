# cryptoAssets

Sample input files used by the crypto demos in this repository.

## Files

| File | Purpose |
| --- | --- |
| `input.txt` | Small text file used to test upload, encryption, decryption and editing flows. |
| `input.png` | Small binary file used to check that encryption also works with non-text data. |

## Concepts

- **Plaintext**: the original file contents before encryption (`input.txt`).
- **Ciphertext**: the encrypted bytes produced by the crypto demos. In the server flow they are stored as `encrypted_<original-name>`.
- **Binary safety**: encryption works on raw bytes (`Buffer`), so text and images are handled the same way.
- **Test fixtures**: keeping known inputs in the repo makes it easy to repeat manual tests (for example with the Postman collection in `../server-crypto`).

These files are not secrets. The keys used in the demo code are hard-coded and only meant for learning.

## Used by

- `../server-crypto/server.ts` — upload/encrypt/download flow.
- `../src/2026/fileShareCrypt.ts` — AES encryption helpers used by that server.
- `../src/2026/caesarCipher.ts` and `../src/2026/myOwnCripto.ts` — standalone cipher exercises.

## Trying the demo

From the repository root:

```bash
npm start
# open ../server-crypto/Crypto Files.postman_collection.json, or:
curl -F "file=@cryptoAssets/input.txt" http://localhost:3000/upload
curl http://localhost:3000/files
```
