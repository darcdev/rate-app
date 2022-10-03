import { Formik } from "formik";
import SignInForm from "./SignInForm";
import * as Yup from "yup";
import useSignIn from "../../hooks/useSignIn";

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Username must have more or equal to 3 characters")
    .required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const SignIndexForm = () => {
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const { data } = await signIn({ username, password });
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIndexForm;
