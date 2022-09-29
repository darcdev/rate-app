import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import AppBar from "./AppBar";
import RepositoryList from "./RepositoryList";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <RepositoryList />
      <StatusBar style="inverted" />
    </View>
  );
};

export default Main;
