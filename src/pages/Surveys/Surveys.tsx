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
import React from "react";

const Surveys: React.FC = () => {
  return (
    <Box
      sx={{
        border: "1px solid gray",
        borderRadius: "10px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
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
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        {/* Text Input 1 */}
        <TextField
          label="Survey name"
          variant="standard"
          fullWidth
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
        {/* Select Input */}
        <FormControl fullWidth>
          <InputLabel
            id="select-label"
            sx={{ color: "text.secondary", fontSize: "1rem" }}
          >
            Select Option
          </InputLabel>
          <Select
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
            <MenuItem value={10}>Option 1</MenuItem>
            <MenuItem value={20}>Option 2</MenuItem>
            <MenuItem value={30}>Option 3</MenuItem>
          </Select>
        </FormControl>
        <Typography
          variant="body1"
          sx={{ color: "text.secondary", fontSize: "1rem" }}
        >
          Your survey recipients will be asked to fill in these form
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
          <RadioGroup row aria-label="survey-options" name="survey-options">
            <FormControlLabel
              value="option1"
              control={<Radio />}
              label={
                <Typography sx={{ fontSize: "1rem", color: "text.primary" }}>
                  Option 1
                </Typography>
              }
            />
            <FormControlLabel
              value="option2"
              control={<Radio />}
              label={
                <Typography sx={{ fontSize: "1rem", color: "text.primary" }}>
                  Option 2
                </Typography>
              }
            />
          </RadioGroup>
        </FormControl>
        {/* Checkbox */}
        <FormControlLabel
          control={<Checkbox />}
          label={
            <Typography sx={{ fontSize: "1rem", color: "text.primary" }}>
              Agree to terms and conditions
            </Typography>
          }
        />
        {/* Date Input */}
        <TextField
          label="Deadline for responses"
          type="date"
          variant="standard"
          InputLabelProps={{ shrink: true, sx: { color: "text.secondary" } }}
          sx={{
            "& .MuiInputBase-input": { fontSize: "1rem" },
            width: "200px",
            "& .MuiInput-underline:before": { borderBottom: "1px solid gray" },
            "& .MuiInput-underline:after": {
              borderBottom: "2px solid primary.main",
            },
            marginTop: "5px",
          }}
        />
        {/* Text Input 2 (Comments) */}
        <TextField
          label="Notes for recipients (optional)"
          variant="standard"
          multiline
          rows={4}
          InputLabelProps={{ sx: { color: "text.secondary" } }}
          sx={{
            "& .MuiInputBase-input": { fontSize: "1rem" },
            "& .MuiInput-underline:before": { borderBottom: "1px solid gray" },
            "& .MuiInput-underline:after": {
              borderBottom: "2px solid primary.main",
            },
            marginTop: "5px",
          }}
          fullWidth
        />
        <Typography sx={{ fontSize: "1rem", color: "gray" }}>
          This notes will appear in the email sent to your recipient
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
        <Typography sx={{ fontSize: "1rem", color: "gray", marginTop: "16px" }}>
          This will send the survey to your recipient
        </Typography>
      </Box>
    </Box>
  );
};

export default Surveys;
