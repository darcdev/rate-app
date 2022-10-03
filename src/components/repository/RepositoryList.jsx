import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useQuery } from "@apollo/client";
import RepositoryItem from "./RepositoryItem";
import { GET_REPOSITORIES } from "../../graphql/queries";
import Text from "../customComponents/Text";
const RepositoryList = () => {
  const { data, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });

  if (loading) return <Text>Loading...</Text>;
  console.log(data);
  return (
    <FlatList
      data={data.repositories.edges}
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

export default RepositoryList;
