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

const useRepositories = (selectedOrder) => {
  const { data } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-network",
    variables: order[selectedOrder],
  });
  return { data };
};

export default useRepositories;
