import { View, Text } from "react-native";
import React from "react";

const RepositoryItem = ({ item }) => {
  return (
    <View>
      <Text>Full Names : {item.fullName}</Text>
      <Text>Description : {item.description}</Text>
      <Text>Language : {item.language}</Text>
      <Text>Forks : {item.forksCount}</Text>
      <Text>Reviews : {item.reviewCount}</Text>
      <Text>Rating : {item.ratingAverage}</Text>
    </View>
  );
};

export default RepositoryItem;
