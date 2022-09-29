import { Alert, Pressable, StyleSheet, Text } from "react-native";
import theme from "../../theme";

const AppBarTab = ({ menuItem }) => {
  return (
    <Pressable
      onPress={() => Alert.alert("prueba menu")}
      style={styles.menuItem}
      key={menuItem.name}
    >
      <Text style={styles.menuItemText}>{menuItem.name}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    paddingRight: 35,
  },
  menuItemText: {
    color: theme.colors.textWhite,
  },
});
export default AppBarTab;
