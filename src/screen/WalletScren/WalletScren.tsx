import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

export function WalletScren({
  route,
}: {
  route: {params: {walletAddress: string}};
}) {
  const {walletAddress} = route.params;
  console.log(route, walletAddress);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text selectable={true}>{walletAddress}</Text>
      <TouchableOpacity onPress={() => Clipboard.setString(walletAddress)}>
        <Text>copiar</Text>
      </TouchableOpacity>
    </View>
  );
}
