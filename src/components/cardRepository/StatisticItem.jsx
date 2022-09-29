import { View, StyleSheet } from "react-native";
import transformStatistic from "../../utils/transformStatistic";
import Text from "../customComponents/Text";

const StatisticItem = ({ item, statistic }) => {
  const initialStatistic = item[statistic.property];
  const finalStatistic =
    initialStatistic >= 1000
      ? `${transformStatistic(initialStatistic)}k`
      : initialStatistic;
  return (
    <View>
      <View style={styles.statisticItemContainer}>
        <Text fontWeight="bold">{finalStatistic}</Text>
      </View>
      <View style={styles.statisticItemContainer}>
        <Text color="textSecondary">{statistic.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statisticItemContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default StatisticItem;
