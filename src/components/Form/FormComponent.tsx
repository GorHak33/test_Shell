import React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { FormComponentProps, FormValues, typePost } from "../../types/types";

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

const FormComponent: React.FC<FormComponentProps> = ({
  onSubmit,
  posts,
  isSubmitted,
}) => {
  return (
    <Box
      sx={{
        border: "1px solid gray",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        boxSizing: "border-box",
        height: "auto",
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        width: "60%",
        margin: "0 auto",
        maxHeight: "fit-content",
      }}
    >
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
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
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
                {posts.map((post: typePost) => (
                  <MenuItem key={post.id} value={post.id}>
                    {post.title}
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
                      One survey per user
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
                      One survey per contributor
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
            <FormControlLabel
              control={
                <Checkbox
                  name="agreeToTerms"
                  checked={values.agreeToTerms}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              }
              label={
                <Typography sx={{ fontSize: "1rem", color: "text.primary" }}>
                  Send to all listed contributors and users via email
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
                borderRadius: "20px",
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

export default FormComponent;
