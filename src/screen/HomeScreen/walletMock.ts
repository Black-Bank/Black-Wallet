import config from '../../../config';
import {CREAT_TRANSACTION_WALLET} from '../../component/client/queries/queries';
import {ECoinType} from '../../component/types/interfaces';

export const WalletMock = [
  {
    request: {
      query: CREAT_TRANSACTION_WALLET,
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
            WalletType: ECoinType.BTC,
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
