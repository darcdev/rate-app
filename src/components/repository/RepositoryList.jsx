import React, { useState } from "react";
import useRepositories from "../../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";
const RepositoryList = () => {
  const [selectedOrder, setSelectedOrder] = useState("");
  const { data } = useRepositories(selectedOrder);
  return (
    <RepositoryListContainer
      selectedOrder={selectedOrder}
      setSelectedOrder={setSelectedOrder}
      data={data?.repositories}
    />
  );
};

export default RepositoryList;
