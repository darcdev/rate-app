import { View, StyleSheet } from "react-native";
import CardHeader from "../cardRepository/CardHeader";
import CardStatistics from "../cardRepository/CardStatistics";

const RepositoryItem = ({ item }) => {
  const { node: repository } = item;
  return (
    <View style={styles.cardContainer}>
      <CardHeader item={repository} />
      <CardStatistics item={repository} />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    padding: 25,
  },
});

export default RepositoryItem;
