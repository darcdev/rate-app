import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import theme from "../../theme";
import AppBarTab from "./AppBarTab";
import { useQuery, useApolloClient } from "@apollo/client";
import { GET_USER } from "../../graphql/queries";
import useAuthStorage from "../../hooks/useAuthStorageContext";
import { useNavigate } from "react-router-native";

const navMenu = [{ name: "Repositories", path: "/" }];

const AppBar = () => {
  const authStorage = useAuthStorage();
  const navigate = useNavigate();

  const { data } = useQuery(GET_USER);
  const authorizedUser = data?.me;

  const apolloClient = useApolloClient();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    navigate("/signin");
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.menu} horizontal>
        {navMenu.map((menuItem) => (
          <AppBarTab menuItem={menuItem} key={menuItem.name} />
        ))}
        {!authorizedUser ? (
          <>
            <AppBarTab menuItem={{ name: "SignIn", path: "/signin" }} />
            <AppBarTab menuItem={{ name: "SignUp", path: "/signup" }} />
          </>
        ) : (
          <>
            <AppBarTab
              menuItem={{ name: "Create Review", path: "/create-review" }}
            />
            <AppBarTab menuItem={{ name: "SignOut", fn: signOut }} />
          </>
        )}
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
