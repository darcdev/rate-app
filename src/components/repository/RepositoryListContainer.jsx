import { View, StyleSheet, FlatList } from "react-native";
import { useNavigate } from "react-router-native";
import OrderRepositoryPicker from "./OrderRepositoryPicker";
import PressableRepositoryItem from "./PressableRepositoryItem";
import { Searchbar } from "react-native-paper";

const RepositoryListContainer = ({
  data,
  selectedOrder,
  setSelectedOrder,
  searchKeyword,
  setSearchKeyword,
  onEndReach,
}) => {
  const navigate = useNavigate();
  const onPressRepository = (id) => {
    navigate(`/repository/${id}`);
  };
  const repositoryNodes = data ? data.edges.map((edge) => edge.node) : [];
  console.log("repositories", repositoryNodes);
  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={
        <View style={styles.headerList}>
          <Searchbar
            placeholder="Search"
            onChangeText={(query) => setSearchKeyword(query)}
            value={searchKeyword}
          />
          <OrderRepositoryPicker
            selectedOrder={selectedOrder}
            setSelectedOrder={setSelectedOrder}
          />
        </View>
      }
      renderItem={({ item }) => (
        <PressableRepositoryItem
          item={item}
          onPressRepository={onPressRepository}
        />
      )}
      keyExtractor={(item) => item.id}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

const ItemSeparator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  headerList: {
    padding: 20,
  },
});

export default RepositoryListContainer;
