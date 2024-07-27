import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Checkbox,
  Button,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ANIME } from "../../gql/queries/getAnime";
import { SAVE_TEXT_ACTIVITY } from "../../gql/mutations/createSurvey";
import { Anime, FormValues } from "../../types/types";

// Define the validation schema
const validationSchema = Yup.object().shape({
  surveyName: Yup.string().required("Survey name is required."),
  selectedOption: Yup.string().required("Select an option."),
  recipientOption: Yup.string().required("Select recipient option."),
  agreeToTerms: Yup.boolean()
    .oneOf([true], "You must agree to the terms.")
    .required("You must agree to the terms."),
  deadline: Yup.date().required("Deadline is required."),
});

const initialValues: FormValues = {
  surveyName: "",
  selectedOption: "",
  recipientOption: "",
  agreeToTerms: false,
  deadline: "",
  notes: "",
};

const Surveys: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    loading: queryLoading,
    error: queryError,
    data,
  } = useQuery(GET_ANIME);

  const [saveTextActivity, { loading, error }] =
    useMutation(SAVE_TEXT_ACTIVITY);

  if (queryLoading)
    return <Typography variant="h1">Loading data...</Typography>;

  if (queryError)
    return (
      <Typography variant="h1">
        Error fetching data: {queryError.message}
      </Typography>
    );

  const animeItems = data.Page.media.slice(0, 7);

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
  };

  return (
    <Box
      sx={{
        border: "1px solid gray",
        borderRadius: "10px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        boxSizing: "border-box",
        height: "auto",
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        width: "60%",
        margin: "0 auto",
      }}
    >
      {/* Title */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "24px",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontSize: "1.5rem", color: "text.primary", fontWeight: 500 }}
        >
          Create a Survey
        </Typography>
      </Box>

      {/* Form */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            {/* Survey Name */}
            <Field
              as={TextField}
              name="surveyName"
              label="Survey Name"
              variant="standard"
              fullWidth
              error={touched.surveyName && Boolean(errors.surveyName)}
              helperText={touched.surveyName && errors.surveyName}
              InputProps={{
                sx: {
                  "& .MuiInputBase-input": { fontSize: "1rem" },
                },
              }}
              InputLabelProps={{
                sx: {
                  fontSize: "1rem",
                  color: "text.secondary",
                },
              }}
              sx={{
                "& .MuiInput-underline:before": {
                  borderBottom: "1px solid gray",
                },
                "& .MuiInput-underline:after": {
                  borderBottom: "2px solid primary.main",
                },
              }}
            />

            {/* Select Option */}
            <FormControl fullWidth>
              <InputLabel
                id="select-label"
                sx={{ color: "text.secondary", fontSize: "1rem" }}
              >
                Please select a form
              </InputLabel>
              <Field
                as={Select}
                name="selectedOption"
                labelId="select-label"
                label="Select Option"
                sx={{
                  "& .MuiSelect-select": { fontSize: "1rem" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderBottom: "1px solid gray",
                    },
                    "&:hover fieldset": {
                      borderBottom: "2px solid primary.main",
                    },
                    "&.Mui-focused fieldset": {
                      borderBottom: "2px solid primary.main",
                    },
                  },
                }}
              >
                {animeItems.map((anime: Anime) => (
                  <MenuItem key={anime.id} value={anime.id}>
                    {anime.title.english}
                  </MenuItem>
                ))}
              </Field>
              {touched.selectedOption && errors.selectedOption && (
                <Typography color="error" variant="body2">
                  {errors.selectedOption}
                </Typography>
              )}
            </FormControl>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", fontSize: "1rem" }}
            >
              Your survey recipients will be asked to fill in these forms
            </Typography>

            {/* Radio Buttons */}
            <FormControl>
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  fontSize: "1rem",
                  marginBottom: "8px",
                }}
              >
                Recipients
              </Typography>
              <Field
                as={RadioGroup}
                row
                aria-label="survey-options"
                name="recipientOption"
              >
                <FormControlLabel
                  value="option1"
                  control={<Radio />}
                  label={
                    <Typography
                      sx={{ fontSize: "1rem", color: "text.primary" }}
                    >
                      Option 1
                    </Typography>
                  }
                />
                <FormControlLabel
                  value="option2"
                  control={<Radio />}
                  label={
                    <Typography
                      sx={{ fontSize: "1rem", color: "text.primary" }}
                    >
                      Option 2
                    </Typography>
                  }
                />
              </Field>
              {touched.recipientOption && errors.recipientOption && (
                <Typography color="error" variant="body2">
                  {errors.recipientOption}
                </Typography>
              )}
            </FormControl>

            {/* Checkbox */}
            <Field
              as={FormControlLabel}
              control={<Checkbox />}
              name="agreeToTerms"
              label={
                <Typography sx={{ fontSize: "1rem", color: "text.primary" }}>
                  Agree to terms and conditions
                </Typography>
              }
            />
            {touched.agreeToTerms && errors.agreeToTerms && (
              <Typography color="error" variant="body2">
                {errors.agreeToTerms}
              </Typography>
            )}

            {/* Date Input */}
            <Field
              as={TextField}
              name="deadline"
              label="Deadline for responses"
              type="date"
              variant="standard"
              InputLabelProps={{
                shrink: true,
                sx: { color: "text.secondary" },
              }}
              sx={{
                "& .MuiInputBase-input": { fontSize: "1rem" },
                width: "200px",
                "& .MuiInput-underline:before": {
                  borderBottom: "1px solid gray",
                },
                "& .MuiInput-underline:after": {
                  borderBottom: "2px solid primary.main",
                },
                marginTop: "5px",
              }}
              error={touched.deadline && Boolean(errors.deadline)}
              helperText={touched.deadline && errors.deadline}
            />

            {/* Text Input 2 (Notes) */}
            <Field
              as={TextField}
              name="notes"
              label="Notes for recipients (optional)"
              variant="standard"
              multiline
              rows={4}
              InputLabelProps={{ sx: { color: "text.secondary" } }}
              sx={{
                "& .MuiInputBase-input": { fontSize: "1rem" },
                "& .MuiInput-underline:before": {
                  borderBottom: "1px solid gray",
                },
                "& .MuiInput-underline:after": {
                  borderBottom: "2px solid primary.main",
                },
                marginTop: "5px",
              }}
              fullWidth
            />

            <Typography sx={{ fontSize: "1rem", color: "gray" }}>
              These notes will appear in the email sent to your recipients
            </Typography>

            {/* Submit Button */}
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{
                fontSize: "1rem",
                padding: "8px 16px",
                alignSelf: "flex-start",
                marginTop: "10px",
              }}
            >
              Create survey
            </Button>
            <Typography
              sx={{ fontSize: "1rem", color: "gray", marginTop: "16px" }}
            >
              This will send the survey to your recipient
            </Typography>
          </Form>
        )}
      </Formik>

      {isSubmitted && (
        <Box mt={1}>
          <Typography variant="h6" color="success.main">
            Survey created successfully!
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Surveys;
