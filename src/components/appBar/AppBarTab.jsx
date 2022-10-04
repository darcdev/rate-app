import { Pressable, StyleSheet, Text } from "react-native";
import { Link } from "react-router-native";
import theme from "../../theme";

const AppBarTab = ({ menuItem }) => {
  return (
    <Pressable
      onPress={menuItem.fn}
      style={styles.menuItem}
      key={menuItem.name}
    >
      {menuItem.path ? (
        <Link to={menuItem.path} style={styles.link}>
          <Text style={styles.menuItemText}>{menuItem.name}</Text>
        </Link>
      ) : (
        <Text style={styles.menuItemText}>{menuItem.name}</Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    paddingRight: 20,
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
  },
  menuItemText: {
    color: theme.colors.textWhite,
  },
});
export default AppBarTab;
