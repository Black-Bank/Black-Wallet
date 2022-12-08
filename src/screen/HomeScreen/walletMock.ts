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
            address: '123456',
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
