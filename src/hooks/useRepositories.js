import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const order = {
  latest: {
    orderBy: "CREATED_AT",
  },
  highest: {
    orderBy: "RATING_AVERAGE",
    orderDirection: "DESC",
  },
  lowest: {
    orderBy: "RATING_AVERAGE",
    orderDirection: "ASC",
  },
};

const useRepositories = ({ selectedOrder, ...variables }) => {
  const variablesModified = { ...order[selectedOrder], ...variables };
  const { data, fetchMore, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-network",
    variables: variablesModified,
  });
  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;
    if (!canFetchMore) {
      return;
    }
    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variablesModified,
      },
    });
  };
  return { data, fetchMore: handleFetchMore };
};

export default useRepositories;
