import {useMutation} from '@apollo/client';
import config from '../../../config';
import {CREAT_ETH_WALLET} from '../client/queries/queries';

export function AddETHWallet() {
  const [addWallet, {data, loading, error}] = useMutation(CREAT_ETH_WALLET);
  addWallet({
    variables: {
      hashId: 'deg-hjags-123-212asdl',
      name: 'create useMutation',
      key: config.KEY_SECRET_MONGODB,
    },
  });
  return {data: data, loading: loading, error: error};
}
