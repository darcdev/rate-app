import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import theme from "../../theme";
import AppBarTab from "./AppBarTab";

const navMenu = [
  { name: "Repositories", path: "/" },
  { name: "SignIn", path: "/signin" },
  { name: "Reviews", path: "/reviews" },
];

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.menu} horizontal>
        {navMenu.map((menuItem) => (
          <AppBarTab menuItem={menuItem} key={menuItem.name} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.bg.nav,
    height: 80,
    paddingHorizontal: 10,
    flexDirection: "row",
  },
  menu: {
    flexDirection: "row",
  },
});

export default AppBar;
