import {useQuery} from '@apollo/client';
import config from '../../../config';
import {GET_BALANCE} from '../client/queries/queries';

export const useGetBalance = () => {
  const {data, loading, error, refetch} = useQuery(GET_BALANCE, {
    variables: {
      hashId: 'deg-hjags-123-212asdl',
      key: config.KEY_SECRET_MONGODB,
    },
  });

  return {data, loading, error, refetch};
};
