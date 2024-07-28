import React, { useMemo, useState } from "react";
import { CircularProgress, Typography } from "@mui/material";

import { useMutation, useQuery } from "@apollo/client";
import { GET_POSTS } from "../../gql/queries/getPosts";
import { CREATE_POST } from "../../gql/mutations/createPost";
import { FormValues } from "../../types/types";
import FormComponent from "../../components/Form/FormComponent";

const Surveys: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    loading: queryLoading,
    error: queryError,
    data,
  } = useQuery(GET_POSTS);

  const posts = useMemo(() => data?.posts.data.slice(0, 7), [data]);

  const [createPost, { loading: createLoading, error }] =
    useMutation(CREATE_POST);

  if (queryLoading) return <CircularProgress />;

  if (queryError)
    return (
      <Typography variant="h1">
        Error fetching data: {queryError.message}
      </Typography>
    );

  if (createLoading) return <CircularProgress />;
  const handleSubmit = async (values: FormValues, { resetForm }: any) => {
    try {
      await createPost({
        variables: {
          id: values.selectedOption,
          title: values.surveyName,
          body: values.surveyName,
        },
      });
      setIsSubmitted(true);
      resetForm();
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <FormComponent
      onSubmit={handleSubmit}
      posts={posts}
      isSubmitted={isSubmitted}
    />
  );
};

export default Surveys;
