import { View, StyleSheet } from "react-native";
import Text from "../customComponents/Text";

const StatisticItem = ({ item, statistic }) => {
  return (
    <View>
      <View style={styles.statisticItemContainer}>
        <Text fontWeight="bold">{item[statistic.property]}</Text>
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
