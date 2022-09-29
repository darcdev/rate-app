import { StyleSheet, View } from "react-native";
import StatisticItem from "./StatisticItem";

const statisticItems = [
  { name: "Stars", property: "stargazersCount" },
  { name: "Forks", property: "forksCount" },
  { name: "Reviews", property: "reviewCount" },
  { name: "Rating", property: "ratingAverage" },
];

const CardStatistics = ({ item }) => {
  return (
    <View style={styles.statistics}>
      {statisticItems.map((statistic) => (
        <StatisticItem statistic={statistic} item={item} key={statistic.name} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  statistics: {
    flexDirection: "row",
    paddingHorizontal: 30,
    marginTop: 20,
    justifyContent: "space-between",
  },
});

export default CardStatistics;
