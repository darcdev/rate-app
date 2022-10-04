import Main from "./src/components/Main";
import { NativeRouter } from "react-router-native";
import createApolloClient from "./src/utils/apolloClient";
import { ApolloProvider } from "@apollo/client";
import AuthStorage from "./src/utils/authStorage";
import AuthStorageContext from "./src/context";

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

export default function App() {
  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <AuthStorageContext.Provider value={authStorage}>
          <Main />
        </AuthStorageContext.Provider>
      </ApolloProvider>
    </NativeRouter>
  );
}
