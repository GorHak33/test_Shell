import React, { useMemo, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

import { useMutation, useQuery } from "@apollo/client";
import { GET_ANIME } from "../../gql/queries/getAnime";
import { SAVE_TEXT_ACTIVITY } from "../../gql/mutations/createSurvey";
import { FormValues } from "../../types/types";
import FormComponent from "../../components/Form/FormComponent";

const Surveys: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    loading: queryLoading,
    error: queryError,
    data,
  } = useQuery(GET_ANIME);

  const animeItems = useMemo(() => data?.Page.media.slice(0, 7), [data]);

  const [saveTextActivity, { loading, error }] =
    useMutation(SAVE_TEXT_ACTIVITY);

  if (queryLoading) return <CircularProgress />;

  if (queryError)
    return (
      <Typography variant="h1">
        Error fetching data: {queryError.message}
      </Typography>
    );

  // you can comment mutation functionality and see how form submission works with his effects, with mutation we will get error unauthorized because for the mutating data
  // api requires to have an account in their platform, however the mutation is correct and will work fine if we have an account.
  const handleSubmit = async (values: FormValues, { resetForm }: any) => {
    try {
      await saveTextActivity({
        variables: {
          id: values.selectedOption,
          text: values.surveyName,
          locked: false,
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
    // console.log(values)
  };

  return (
    <FormComponent
      onSubmit={handleSubmit}
      animeItems={animeItems}
      isSubmitted={isSubmitted}
    />
  );
};

export default Surveys;
