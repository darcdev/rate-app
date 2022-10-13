import { FlatList, StyleSheet, View } from "react-native";
import { useParams } from "react-router-native";
import RepositoryItem from "../components/repository/RepositoryItem";
import ReviewItem from "../components/repository/ReviewItem";
import useRepository from "../hooks/useRepository";

const SingleRepository = () => {
  const { id } = useParams();
  const { data, fetchMore } = useRepository({ repositoryId: id, first: 4 });
  const onEndReach = () => {
    fetchMore();
  };

  if (!data) return null;
  const reviews = data.repository.reviews?.edges.map((edge) => edge.node);
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
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
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
