import { useContext } from "react";

import AuthStorageContext from "../context/";

const useAuthStorage = () => {
  return useContext(AuthStorageContext);
};

export default useAuthStorage;
