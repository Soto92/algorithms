class SimpleEncryption {
    private static key: string = 'helloWorldMegaKey';

    static encrypt(text: string): string {
        let result = '';
        for (let i = 0; i < text.length; i++) {
            console.log(text.charCodeAt(i), " ", this.key.charCodeAt(i % this.key.length))
            const charCode = text.charCodeAt(i) + this.key.charCodeAt(i % this.key.length);
            result += String.fromCharCode(charCode);
        }
        return result;
    }

    static decrypt(encryptedText: string): string {
        let result = '';
        for (let i = 0; i < encryptedText.length; i++) {
            const charCode = encryptedText.charCodeAt(i) - this.key.charCodeAt(i % this.key.length);
            result += String.fromCharCode(charCode);
        }
        return result;
    }
}


const originalText = 'Mauricio';
const criptographed = SimpleEncryption.encrypt(originalText);
const decriptographed = SimpleEncryption.decrypt(criptographed);

console.log('Texto Original:', originalText);
console.log('Texto Criptografado:', criptographed);
console.log('Texto Descriptografado:', decriptographed);