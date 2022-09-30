import { StyleSheet, TextInput as NativeTextInput } from "react-native";
import theme from "../../theme";

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.container, error && styles.error, style];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

const styles = StyleSheet.create({
  container: {
    borderColor: theme.bg.main,
    borderWidth: 1,
    padding: 12,
    marginBottom: 15,
    borderRadius: 5,
  },
  error: {
    borderColor: theme.colors.error,
  },
});

export default TextInput;
