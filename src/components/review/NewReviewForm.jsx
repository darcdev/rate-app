import { View, StyleSheet, Pressable } from "react-native";
import theme from "../../theme";
import FormikTextInput from "../customComponents/FormikTextInput";
import Text from "../customComponents/Text";

const NewReviewForm = ({ onSubmit, error }) => {
  return (
    <View style={styles.container}>
      {error && <Text style={styles.errorText}>{error}</Text>}
      <FormikTextInput name="ownerName" placeholder="Repository owner name" />
      <FormikTextInput name="repositoryName" placeholder="Repository name" />
      <FormikTextInput name="rating" placeholder="Rating between 0 and 100" />
      <FormikTextInput name="text" placeholder="Review" multiline />

      <Pressable style={styles.submitButton} onPress={onSubmit}>
        <Text style={styles.labelSubmit}>Create a Review</Text>
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

export default NewReviewForm;
