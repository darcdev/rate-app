import { Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-native";
import * as Yup from "yup";
import useCreateReview from "../../hooks/useCreateReview";
import NewReviewForm from "./NewReviewForm";

const initialValues = {
  ownerName: "",
  repositoryName: "",
  rating: 0,
  text: "",
};

const validationSchema = Yup.object().shape({
  ownerName: Yup.string()
    .min(3, "Repository owner name must have more or equal to 3 characters")
    .required("Repository owner name is required"),
  repositoryName: Yup.string().required("Repository is required"),
  rating: Yup.number().min("0").max("100").required("Rating is required"),
});

const NewReviewIndexForm = () => {
  const [createReview] = useCreateReview();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      const {
        createReview: { repositoryId },
      } = await createReview(values);
      navigate(`/repository/${repositoryId}`);
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
        <NewReviewForm onSubmit={handleSubmit} error={error} />
      )}
    </Formik>
  );
};

export default NewReviewIndexForm;
