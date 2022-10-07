import { Pressable } from "react-native";
import RepositoryItem from "./RepositoryItem";

const PressableRepositoryItem = ({ onPressRepository, item }) => {
  return (
    <Pressable onPress={() => onPressRepository(item.id)} component>
      <RepositoryItem item={item} />
    </Pressable>
  );
};

export default PressableRepositoryItem;
