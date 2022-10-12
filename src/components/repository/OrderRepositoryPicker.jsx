import { Picker } from "@react-native-picker/picker";

const OrderRepositoryPicker = ({ selectedOrder, setSelectedOrder }) => {
  return (
    <Picker
      selectedValue={selectedOrder}
      onValueChange={(itemValue) => setSelectedOrder(itemValue)}
    >
      <Picker.Item
        label="Select an item..."
        value=""
        enabled={false}
        style={{ color: "gray" }}
      />
      <Picker.Item label="Latest Repositories" value="latest" />
      <Picker.Item label="Highest rated Repositories" value="highest" />
      <Picker.Item label="Lowest rated Repositories" value="lowest" />
    </Picker>
  );
};

export default OrderRepositoryPicker;
