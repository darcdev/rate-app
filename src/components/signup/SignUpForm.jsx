import { View, Pressable, StyleSheet } from "react-native";
import React from "react";
import FormikTextInput from "../customComponents/FormikTextInput";
import theme from "../../theme";
import Text from "../customComponents/Text";

const SignUpForm = ({ onSubmit, error }) => {
  return (
    <View style={styles.container}>
      {error && <Text style={styles.errorText}>{error}</Text>}
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <FormikTextInput
        name="passwordConfirm"
        placeholder="Password Confirmation"
        secureTextEntry
      />

      <Pressable style={styles.submitButton} onPress={onSubmit}>
        <Text style={styles.labelSubmit}>Sign Up</Text>
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
  errorText: {
    marginBottom: 10,
    color: theme.colors.error,
  },
});

export default SignUpForm;
