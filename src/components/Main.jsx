import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import theme from "../theme";
import AppBar from "./appBar/AppBar";
import RepositoryList from "./repository/RepositoryList";

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <RepositoryList />
      <StatusBar style="inverted" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.bg.main,
  },
});

export default Main;
