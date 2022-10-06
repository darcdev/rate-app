import { View, StyleSheet, FlatList } from "react-native";
import RepositoryItem from "./RepositoryItem";

const RepositoryListContainer = ({ data }) => {
  return (
    <FlatList
      data={data?.edges}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={RepositoryItem}
      keyExtractor={(item) => item.node.id}
    />
  );
};

const ItemSeparator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

export default RepositoryListContainer;
