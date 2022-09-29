import { View, StyleSheet } from "react-native";
import CardHeader from "../cardRepository/CardHeader";
import CardStatistics from "../cardRepository/CardStatistics";

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.cardContainer}>
      <CardHeader item={item} />
      <CardStatistics item={item} />
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
