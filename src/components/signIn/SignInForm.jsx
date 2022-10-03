import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import FormikTextInput from "../customComponents/FormikTextInput";
import theme from "../../theme";

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <Pressable style={styles.submitButton} onPress={onSubmit}>
        <Text style={styles.labelSubmit}>Sign in</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 20,
  },
  submitButton: {
    backgroundColor: theme.bg.primary,
    padding: 20,
    borderRadius: 5,
  },
  labelSubmit: {
    color: theme.colors.textWhite,
    textAlign: "center",
  },
});

export default SignInForm;
