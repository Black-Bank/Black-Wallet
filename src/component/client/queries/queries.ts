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
  query ($Email: String!) {
    getFormatedData(Email: $Email) {
      WalletType
      address
      balance
      name
      privateKey
      coinPrice
      totalBalance
      unconfirmedBalance
    }
  }
`;

export const GET_COIN_PRICE = gql`
  query ($coin: String!) {
    CoinPrice(coin: $coin)
  }
`;

export const GET_TRANSFER_INFO = gql`
  query GetTransferInfo($coin: String!) {
    getTransferInfo(coin: $coin) {
      LowFee
      MediumFee
      economicFee
      fatestFee
    }
  }
`;

export const CREAT_ETH_WALLET = gql`
  mutation ($Email: String!, $name: String!) {
    createEthWallet(Email: $Email, name: $name)
  }
`;

export const CREAT_BTC_WALLET = gql`
  mutation ($Email: String!, $name: String!) {
    createBTCWallet(Email: $Email, name: $name)
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
  mutation deleteWallet($address: String!, $Email: String!) {
    deleteWallet(address: $address, Email: $Email)
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

export const SEND_CODE_EMAIL = gql`
  mutation SendEmail($email: String!) {
    SendCodePassEmail(Email: $email) {
      code
      isSend
    }
  }
`;
export const SEND_TRANSFER_CODE_EMAIL = gql`
  mutation SendEmail($email: String!) {
    SendTransferCodeEmail(Email: $email) {
      code
      isSend
    }
  }
`;
export const SEND_CODE_SIGNUP_EMAIL = gql`
  mutation SendEmail($email: String!) {
    SendSignUpCodePassEmail(Email: $email) {
      code
      isSend
    }
  }
`;
export const SEND_DELETE_WALLET_EMAIL = gql`
  mutation SendEmail($email: String!) {
    SendDeleteWalletCodeEmail(Email: $email) {
      code
      isSend
    }
  }
`;
export const UPDATE_PASS = gql`
  mutation UpdatePass($passWord: String!, $email: String!) {
    UpdatePass(passWord: $passWord, Email: $email)
  }
`;
