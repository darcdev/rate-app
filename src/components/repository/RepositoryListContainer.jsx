import { View, StyleSheet, FlatList } from "react-native";
import { useNavigate } from "react-router-native";
import PressableRepositoryItem from "./PressableRepositoryItem";

const RepositoryListContainer = ({ data }) => {
  const navigate = useNavigate();
  const onPressRepository = (id) => {
    navigate(`/repository/${id}`);
  };
  const repositoryNodes = data ? data.edges.map((edge) => edge.node) : [];
  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <PressableRepositoryItem
          item={item}
          onPressRepository={onPressRepository}
        />
      )}
      keyExtractor={(item) => item.id}
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
