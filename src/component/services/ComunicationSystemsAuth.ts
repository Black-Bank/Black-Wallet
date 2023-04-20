import CryptoJS from 'crypto-js';
import config from '../../../config';

class Crypto {
  public encrypt(plaintext: string): string {
    const key = CryptoJS.enc.Hex.parse(config.AUTH_PRIVATE_KEY);
    const iv = CryptoJS.enc.Hex.parse(config.IV);
    const ciphertext = CryptoJS.AES.encrypt(plaintext, key, {iv}).toString();
    return ciphertext;
  }

  public decrypt(ciphertext: string): string {
    const key = CryptoJS.enc.Hex.parse(config.AUTH_PRIVATE_KEY);
    const iv = CryptoJS.enc.Hex.parse(config.IV);
    const bytes = CryptoJS.AES.decrypt(ciphertext, key, {iv});
    const plaintext = bytes.toString(CryptoJS.enc.Utf8);
    return plaintext;
  }
}

export default Crypto;
