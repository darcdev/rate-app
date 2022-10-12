import { Picker } from "@react-native-picker/picker";

const OrderRepositoryPicker = ({ selectedOrder, setSelectedOrder }) => {
  return (
    <Picker
      selectedValue={selectedOrder}
      onValueChange={(itemValue) => setSelectedOrder(itemValue)}
      prompt={"Select an item..."}
    >
      <Picker.Item label="Latest Repositories" value="latest" selectedValue />
      <Picker.Item label="Highest rated Repositories" value="highest" />
      <Picker.Item label="Lowest rated Repositories" value="lowest" />
    </Picker>
  );
};

export default OrderRepositoryPicker;
