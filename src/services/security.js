import CryptoJS from 'crypto-js';
const secretKey = 'Hospital-Metropolitano-2024';

// Función para cifrar un mensaje
export function encryptId (id) {
    const encrypted = CryptoJS.AES.encrypt(id, secretKey);
    return encodeURIComponent(encodeURIComponent(encrypted.toString()));
}

// Función para descifrar un mensaje
export function decryptId (encryptedId) {
    // Revertir el reemplazo específico
    const originalEncryptedString = encryptedId.replace(/%2B/g, '+').replace(/%2F/g, '/').replace(/%3D/g, '=');

// Decodificar y desencriptar
    const decodedEncryptedString = decodeURIComponent(decodeURIComponent(originalEncryptedString));
    const decrypted = CryptoJS.AES.decrypt(decodedEncryptedString, secretKey);
    return decrypted.toString(CryptoJS.enc.Utf8);
}