import { createDecipheriv, createCipheriv, randomBytes } from 'crypto';

/**
 * Utility class for password encryption and decryption
 */
class PasswordUtils {
    // Encryption key should be 32 bytes for AES-256
    static #SECRET_KEY = process.env.ENCRYPTION_KEY || 'your-32-byte-secret-key-here!!!!!!';
    static #ALGORITHM = 'aes-256-cbc';

    /**
     * Encrypts a password
     * @param {string} password - The password to encrypt
     * @returns {string} - The encrypted password in format 'iv:encryptedData'
     * @throws {Error} If encryption fails
     */
    static encryptPassword(password) {
        try {
            // Generate a random IV
            const iv = randomBytes(16);
            
            // Create cipher
            const cipher = createCipheriv(
                this.#ALGORITHM,
                Buffer.from(this.#SECRET_KEY),
                iv
            );
            
            // Encrypt the data
            const encrypted = Buffer.concat([
                cipher.update(password),
                cipher.final()
            ]);
            
            // Return IV and encrypted data as hex strings
            return `${iv.toString('hex')}:${encrypted.toString('hex')}`;
        } catch (error) {
            console.error('Encryption error:', error.message);
            throw new Error(`Failed to encrypt password: ${error.message}`);
        }
    }

    /**
     * Decrypts an encrypted password
     * @param {string} encryptedPassword - The encrypted password to decrypt in format 'iv:encryptedData'
     * @returns {string} - The decrypted password
     * @throws {Error} If decryption fails
     */
    static decryptPassword(encryptedPassword) {
        try {
            if (!encryptedPassword || !encryptedPassword.includes(':')) {
                throw new Error('Invalid encrypted password format');
            }

            // Split the stored data into IV and encrypted parts
            const [ivHex, encryptedHex] = encryptedPassword.split(':');
            
            // Convert hex strings back to buffers
            const iv = Buffer.from(ivHex, 'hex');
            const encrypted = Buffer.from(encryptedHex, 'hex');
            
            // Create decipher
            const decipher = createDecipheriv(
                this.#ALGORITHM, 
                Buffer.from(this.#SECRET_KEY), 
                iv
            );
            
            // Decrypt the data
            const decrypted = Buffer.concat([
                decipher.update(encrypted),
                decipher.final()
            ]);
            
            return decrypted.toString('utf8');
        } catch (error) {
            console.error('Decryption error:', error.message);
            throw new Error(`Failed to decrypt password: ${error.message}`);
        }
    }
}

export default PasswordUtils;