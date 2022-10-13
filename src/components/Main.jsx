import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Routes, Route, Navigate } from "react-router-native";
import SignIn from "../screens/SignIn";
import SingleRepository from "../screens/SingleRepository";

import theme from "../theme";
import AppBar from "./appBar/AppBar";
import RepositoryList from "./repository/RepositoryList";
import CreateReview from "../screens/CreateReview";
import SignUp from "../screens/SignUp";
import MyReviews from "../screens/MyReviews";

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/signin" element={<SignIn />} exact />
        <Route path="/signup" element={<SignUp />} exact />
        <Route path="/reviews" element={<MyReviews />} exact />
        <Route path="/create-review" element={<CreateReview />} exact />
        <Route path="/repository/:id" element={<SingleRepository />} exact />
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
