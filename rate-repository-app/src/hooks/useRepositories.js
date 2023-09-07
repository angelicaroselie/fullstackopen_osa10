// 10.11

import { useQuery } from '@apollo/client'; // 10.11
import { GET_REPOSITORIES } from '../graphql/queries'; // 10.11

const useRepositories = () => {
    const { data, error, loading, ...result } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: "cache-and-network", // 10.11
      });

      if (error) {
        console.log(error);
      }

      return {
        repositories: data ? data.repositories : undefined,
        loading,
        ...result,
      };


};

export default useRepositories;