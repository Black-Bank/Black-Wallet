import {gql} from '@apollo/client';

export const GET_WALLETS = gql`
  query ($hashId: String!, $key: String!) {
    getWallets(HashId: $hashId, key: $key) {
      name
      address
      privateKey
      WalletType
    }
  }
`;

export const CREAT_ETH_WALLET = gql`
  mutation ($hashId: String!, $name: String!, $key: String!, $type: String!) {
    createEthWallet(HashId: $hashId, name: $name, key: $key, type: $type) {
      name
    }
  }
`;
