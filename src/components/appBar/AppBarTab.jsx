import { Alert, Pressable, StyleSheet, Text } from "react-native";
import { Link } from "react-router-native";
import theme from "../../theme";

const AppBarTab = ({ menuItem }) => {
  return (
    <Pressable
      onPress={() => Alert.alert("prueba menu")}
      style={styles.menuItem}
      key={menuItem.name}
    >
      <Link to={menuItem.path} style={styles.link}>
        <Text style={styles.menuItemText}>{menuItem.name}</Text>
      </Link>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    paddingRight: 20,
  },
  link: {
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  menuItemText: {
    color: theme.colors.textWhite,
  },
});
export default AppBarTab;
