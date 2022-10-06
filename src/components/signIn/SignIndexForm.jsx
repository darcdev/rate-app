import useSignIn from "../../hooks/useSignIn";
import { useNavigate } from "react-router-native";
import SignInFormContainer from "./signInFormContainer";

const SignIndexForm = () => {
  const [signIn] = useSignIn();

  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      await signIn({ username, password });
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return <SignInFormContainer onSubmit={onSubmit} />;
};

export default SignIndexForm;
