import config from '../../../config';
import {GET_WALLETS} from '../../component/client/queries/queries';

export const WalletMock = [
  {
    request: {
      query: GET_WALLETS,
      variables: {
        hashId: 'deg-hjags-123-212asdl',
        key: config.KEY_SECRET_MONGODB,
        mainNet: config.ETH_MAINNET,
        API_KEY: config.MARKETCAP_API_KEY,
      },
    },
    result: {
      data: {
        getFormatedData: [
          {
            name: 'wallet mock',
            address: '1GfYUSqAbqGTpp6nnCfvTKUBE5QgEwLQX8',
            WalletType: 'BTC',
            balance: '20',
            price: 20,
            coinPrice: 2,
            totalBalance: 100,
          },
        ],
      },
    },
  },
];

export const mockRoute = {
  params: {
    walletAddressTo: '1Nrz32e4LoQ2AWSwdE9NCscyuG3Y8VJ2fL',
    walletAddressFrom: '15fRCkzrT3EdvFDRM1RZFKxtGnPKnBZxFH',
    privateKey: '123ghahjdla233jd23k13j1h231h3',
    coin: 'BTC',
  },
};
