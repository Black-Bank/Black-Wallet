import {Linking} from 'react-native';

export const handleWhatsAppPress = (phoneNumber: string) => {
  Linking.openURL(`https://wa.me/${phoneNumber}`);
};
