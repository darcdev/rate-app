import { View, StyleSheet, Image } from "react-native";
import Text from "../customComponents/Text";

const CardHeader = ({ item }) => {
  return (
    <View style={styles.headCard}>
      <Image style={styles.avatarCard} source={{ uri: item.ownerAvatarUrl }} />
      <View style={styles.header}>
        <Text fontWeight="bold" fontSize="subheading">
          {item.fullName}
        </Text>
        <Text color="textSecondary" style={styles.description}>
          {item.description}
        </Text>
        <View style={styles.badge}>
          <Text color="textWhite">{item.language}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headCard: {
    flexDirection: "row",
  },
  avatarCard: {
    width: 55,
    height: 55,
    borderRadius: 5,
    marginRight: 20,
  },
  header: { flex: 1 },
  description: {
    marginTop: 15,
  },
  badge: {
    backgroundColor: "#0366d6",
    marginTop: 15,
    padding: 5,
    borderRadius: 5,
    flexDirection: "row",
    alignSelf: "flex-start",
  },
});

export default CardHeader;
