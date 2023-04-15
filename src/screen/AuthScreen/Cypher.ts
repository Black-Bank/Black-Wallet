import * as CryptoJS from 'crypto-js';
import config from '../../../config';

export const Cypher = (text: string): string => {
  const hash = CryptoJS.SHA256(text);
  return `${hash.toString(CryptoJS.enc.Hex)}${config.PASSWORD_EARLY}`;
};
