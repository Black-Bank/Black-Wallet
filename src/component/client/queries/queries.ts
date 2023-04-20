import {gql} from '@apollo/client';

export const GET_BALANCE = gql`
  query GetBalance($Email: String!) {
    getBalance(Email: $Email) {
      month
      week
      day
      updateDate
    }
  }
`;

export const GET_WALLETS = gql`
  query ($mainNet: String!, $Email: String!) {
    getFormatedData(mainNet: $mainNet, Email: $Email) {
      WalletType
      address
      balance
      name
      privateKey
      coinPrice
      totalBalance
    }
  }
`;

export const CREAT_ETH_WALLET = gql`
  mutation ($hashId: String!, $name: String!, $key: String!) {
    createEthWallet(HashId: $hashId, name: $name, key: $key)
  }
`;

export const CREAT_BTC_WALLET = gql`
  mutation ($hashId: String!, $name: String!, $key: String!) {
    createBTCWallet(HashId: $hashId, name: $name, key: $key)
  }
`;

export const CREAT_TRANSACTION_WALLET = gql`
  mutation createTransaction(
    $value: Float!
    $addressTo: String!
    $privateKey: String!
    $addressFrom: String!
    $coin: String!
  ) {
    createTransaction(
      value: $value
      addressTo: $addressTo
      privateKey: $privateKey
      addressFrom: $addressFrom
      coin: $coin
    )
  }
`;

export const INSERT_BALANCE = gql`
  mutation InsertBalance($newBalance: Float!, $Email: String!) {
    InsertBalance(NewBalance: $newBalance, Email: $Email)
  }
`;

export const DELETE_WALLET = gql`
  mutation deleteWallet($address: String!, $key: String!, $hashId: String!) {
    deleteWallet(address: $address, key: $key, HashId: $hashId)
  }
`;

export const VERIFY_USER = gql`
  mutation VerifyUser($token: String!) {
    VerifyUser(token: $token)
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser($token: String!) {
    CreateUser(token: $token)
  }
`;
