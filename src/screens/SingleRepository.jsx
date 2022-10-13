import { useLazyQuery } from "@apollo/client";
import { useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useParams } from "react-router-native";
import RepositoryItem from "../components/repository/RepositoryItem";
import ReviewItem from "../components/repository/ReviewItem";
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
  const reviews = data.repository.reviews?.edges.map((edge) => edge.node);
  console.log("reviews", reviews);
  return (
    <FlatList
      ListHeaderComponent={
        <View>
          <RepositoryItem single item={data.repository} />
          <ItemSeparator />
        </View>
      }
      data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
    />
  );
};
const ItemSeparator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

export default SingleRepository;
