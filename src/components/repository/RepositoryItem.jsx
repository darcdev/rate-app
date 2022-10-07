import { View, StyleSheet, Button } from "react-native";
import theme from "../../theme";
import CardHeader from "../cardRepository/CardHeader";
import CardStatistics from "../cardRepository/CardStatistics";
import * as Linking from "expo-linking";

const RepositoryItem = ({ item, single }) => {
  return (
    <View testID="repositoryItem" style={styles.cardContainer}>
      <CardHeader item={item} />
      <CardStatistics item={item} />
      {single && (
        <View style={styles.buttonGithubContainer}>
          <Button
            style={styles.buttonGithub}
            color={theme.bg.primary}
            onPress={() => Linking.openURL(item.url)}
            title="Open in Github"
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    padding: 25,
  },
  buttonGithubContainer: {
    marginTop: 20,
  },
});

export default RepositoryItem;
