import { useLazyQuery } from "@apollo/client";
import { useEffect } from "react";
import { useParams } from "react-router-native";
import RepositoryItem from "../components/repository/RepositoryItem";
import { GET_REPOSITORY } from "../graphql/queries";

const SingleRepository = () => {
  const { id } = useParams();
  const [getRepository, { data }] = useLazyQuery(GET_REPOSITORY);

  useEffect(() => {
    getRepository({
      variables: {
        repositoryId: id,
      },
    });
  }, [id]);

  if (!data) return null;
  return <RepositoryItem single item={data.repository} />;
};

export default SingleRepository;
