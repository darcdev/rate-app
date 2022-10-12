import { Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-native";
import * as Yup from "yup";
import useSignUp from "../../hooks/useSignUp";
import SignUpForm from "./SignUpForm";

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Username must have more than or equal to 3 characters")
    .max(30, "Username must have less than or equal to  characters")
    .required("Username is required"),
  password: Yup.string()
    .min(5, "Username must have more than or equal to 5 characters")
    .max(50, "Username must have less than or equal to 50 characters")

    .required("Password is required"),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords don't match")
    .required("Password Confirm is required"),
});

const SignUpIndexForm = () => {
  const [signUp] = useSignUp();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      await signUp(values);
      navigate("/");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <SignUpForm onSubmit={handleSubmit} error={error} />
      )}
    </Formik>
  );
};

export default SignUpIndexForm;
