import React, { useState } from "react";
import useRepositories from "../../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";
const RepositoryList = () => {
  const [selectedOrder, setSelectedOrder] = useState("latest");
  const [searchKeyword, setSearchKeyword] = useState("");

  const { data, fetchMore } = useRepositories({
    selectedOrder,
    searchKeyword,
    first: 4,
  });

  const onEndReach = () => {
    fetchMore();
  };
  return (
    <RepositoryListContainer
      selectedOrder={selectedOrder}
      setSelectedOrder={setSelectedOrder}
      searchKeyword={searchKeyword}
      setSearchKeyword={setSearchKeyword}
      data={data?.repositories}
      onEndReach={onEndReach}
    />
  );
};

export default RepositoryList;
