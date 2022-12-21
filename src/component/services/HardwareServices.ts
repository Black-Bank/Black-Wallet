import axios from 'axios';

export async function isDeviceConnected() {
  console.log('check internet');
  try {
    const data = await axios.get('https://www.google.com');

    return Boolean(data);
  } catch (e) {
    return false;
  }
}
