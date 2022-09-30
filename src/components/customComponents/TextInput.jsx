import { StyleSheet, TextInput as NativeTextInput } from "react-native";
import theme from "../../theme";

const TextInput = ({ style, ...props }) => {
  const textInputStyle = [styles.container, style];

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
});

export default TextInput;
