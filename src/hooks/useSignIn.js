import { useApolloClient, useMutation } from "@apollo/client";
import { AUTHENTICATE_USER } from "../graphql/mutations";
import AuthStorage from "../utils/authStorage";

const authStorage = new AuthStorage();

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE_USER);
  const apolloClient = useApolloClient();
  const signIn = async ({ username, password }) => {
    const { data } = await mutate({
      variables: { credentials: { username, password } },
    });
    await authStorage.setAccessToken(data.authenticate.accessToken);
    apolloClient.resetStore();
  };
  return [signIn, result];
};

export default useSignIn;
