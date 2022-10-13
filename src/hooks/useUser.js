import { useQuery } from "@apollo/client";
import { GET_USER } from "../graphql/queries";

const useUser = (variables) => {
  const { data, fetchMore, loading } = useQuery(GET_USER, { variables });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.me?.reviews.pageInfo.hasNextPage;
    if (!canFetchMore) {
      return;
    }
    fetchMore({
      variables: {
        after: data.me.reviews.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return { data, fetchMore: handleFetchMore };
};

export default useUser;
