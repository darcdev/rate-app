import { FlatList, StyleSheet, View } from "react-native";
import ReviewItem from "../components/repository/ReviewItem";
import useUser from "../hooks/useUser";

const MyReviews = () => {
  const { data, fetchMore, refetchReviews } = useUser({
    includeReviews: true,
    first: 5,
  });
  const reviews = data?.me?.reviews.edges.map((edge) => edge.node) || [];

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <FlatList
      data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <ReviewItem review={item} myReview refetchReviews={refetchReviews} />
      )}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
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

export default MyReviews;
