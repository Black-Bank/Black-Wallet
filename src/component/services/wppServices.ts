import {Linking} from 'react-native';

export const handleWhatsAppPress = (phoneNumber: string) => {
  Linking.openURL(`https://api.whatsapp.com/send?phone=${phoneNumber}`);
};
