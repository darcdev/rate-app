import { Formik } from "formik";
import SignInForm from "./SignInForm";
import * as Yup from "yup";

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

const signFormContainer = ({ onSubmit }) => {
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

export default signFormContainer;
