import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Routes, Route, Navigate } from "react-router-native";
import SignIn from "../screens/SignIn";
import SingleRepository from "../screens/SingleRepository";

import theme from "../theme";
import AppBar from "./appBar/AppBar";
import RepositoryList from "./repository/RepositoryList";

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/reviews" element={<SignIn />} exact />
        <Route path="/repository/:id" element={<SingleRepository />} exact />
        <Route path="/signin" element={<SignIn />} exact />
        <Route path="*" element={<Navigate to="/" replace />} exact />
      </Routes>
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
