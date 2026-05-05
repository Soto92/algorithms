function caesarCipher(text: string, shift: number): string {
    const result: string[] = [];
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (char.match(/[a-zA-Z]/)) {
            const isUpperCase = char === char.toUpperCase();
            const offset = isUpperCase ? 65 : 97;
            const charCode = text.charCodeAt(i) - offset;
            const shiftedCharCode = (charCode + shift) % 26;
            const shiftedChar = String.fromCharCode(shiftedCharCode + offset);
            result.push(shiftedChar);
        } else {
            result.push(char);
        }
    }
    return result.join('');
}

const textoOriginal = 'Mauricio';
const shiftAmount = 1;
const cryptographed = caesarCipher(textoOriginal, shiftAmount);

console.log('Original Text:', textoOriginal);
console.log('Criptograph Text:', cryptographed);

console.log("Criptographed reverted", caesarCipher(cryptographed, -1))
