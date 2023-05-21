import CryptoJS from 'crypto-js';
import config from '../../../config';

const isProd = Boolean(config.NODE_ENV === 'prod');
class Crypto {
  public encrypt(plaintext: string): string {
    const key = CryptoJS.enc.Hex.parse(
      isProd ? config.PROD_AUTH_PRIVATE_KEY : config.AUTH_PRIVATE_KEY,
    );
    const iv = CryptoJS.enc.Hex.parse(isProd ? config.PROD_IV : config.IV);
    const ciphertext = CryptoJS.AES.encrypt(plaintext, key, {iv}).toString();
    return ciphertext;
  }

  public async decrypt(ciphertext: string): Promise<string> {
    const key = CryptoJS.enc.Hex.parse(
      isProd ? config.PROD_AUTH_PRIVATE_KEY : config.AUTH_PRIVATE_KEY,
    );
    const iv = CryptoJS.enc.Hex.parse(isProd ? config.PROD_IV : config.IV);
    const bytes = CryptoJS.AES.decrypt(ciphertext, key, {iv});
    const plaintext = bytes.toString(CryptoJS.enc.Utf8);
    return plaintext;
  }
}

export default Crypto;
