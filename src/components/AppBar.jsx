import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import AppBarTab from "./AppBarTab";

const navMenu = [
  { name: "Repositories" },
  { name: "SignIn" },
  { name: "Reviews" },
];

const AppBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        {navMenu.map((menuItem) => (
          <AppBarTab menuItem={menuItem} key={menuItem.name} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.appBar.bg,
    height: 80,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  menu: {
    flexDirection: "row",
  },
});

export default AppBar;
