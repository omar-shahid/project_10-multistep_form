import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  MenuItem,
  Radio,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { Field, FormikProps } from "formik";
import { CheckboxWithLabel, RadioGroup, Select } from "formik-material-ui";
import { KeyboardDatePicker } from "formik-material-ui-pickers";
import React from "react";
import { FormValues, useStyles } from "../App";

interface Props {
  helpers: FormikProps<FormValues>;
}

export const PersonalInfo: React.FC<Props> = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  const smBreak = useMediaQuery(theme.breakpoints.down("sm"));
  const {
    errors,
    setFieldValue,
    touched,
    isSubmitting,
    handleChange,
  } = props.helpers;
  return (
    <>
      <Typography variant="h3" align="center" component="h2">
        Personal Information
      </Typography>
      <br />

      <Field
        fullWidth
        component={KeyboardDatePicker}
        name="dob"
        label="Date"
        onChange={(val: string) => setFieldValue("dob", val)}
      />
      <br />
      <br />
      <Box
        display="flex"
        justifyContent="space-between"
        className={classes.threeCols}
        flexDirection={smBreak ? "column" : "row"}
      >
        <FormControl error={!!(errors.country && touched.country)}>
          <InputLabel htmlFor="country">Country</InputLabel>
          <Field
            component={Select}
            as="select"
            name="country"
            inputProps={{
              id: "country",
            }}
          >
            <MenuItem value="pk">Pakistan</MenuItem>
          </Field>
          {errors.country ? (
            <FormHelperText error>{errors.country}</FormHelperText>
          ) : null}
        </FormControl>
        <FormControl error={!!(errors.province && touched.province)}>
          <InputLabel htmlFor="province">Province</InputLabel>
          <Field
            component={Select}
            name="province"
            inputProps={{
              id: "province",
            }}
          >
            <MenuItem value={"sindh"}>Sindh</MenuItem>
            <MenuItem value={"Baluchistan"}>Baluchistan</MenuItem>
            <MenuItem value={"Punjab"}>Punjab</MenuItem>
            <MenuItem value={"KPK"}>Khyber Pakhtunkhwa</MenuItem>
            <MenuItem value={"GB"}>Gilgit Baltistan</MenuItem>
          </Field>

          {errors.province && touched.province ? (
            <FormHelperText error>{errors.province}</FormHelperText>
          ) : null}
        </FormControl>

        <FormControl error={!!(errors.city && touched.city)}>
          <InputLabel htmlFor="city">City</InputLabel>
          <Field
            component={Select}
            name="city"
            inputProps={{
              id: "city",
            }}
          >
            <MenuItem value={"karachi"}>Karachi</MenuItem>
            <MenuItem value={"lahore"}>Lahore</MenuItem>
            <MenuItem value={"peshawar"}>Peshawar</MenuItem>
            <MenuItem value={"quetta"}>Quetta</MenuItem>
            <MenuItem value={"islamabad"}>Islamabad</MenuItem>
            <MenuItem value={"rawalPindi"}>Rawal Pindi</MenuItem>
            <MenuItem value={"hyderabad"}>Hyderabad</MenuItem>
          </Field>
          {errors.city && touched.city ? (
            <FormHelperText error>{errors.city}</FormHelperText>
          ) : null}
        </FormControl>
      </Box>
      <br />
      <Field component={RadioGroup} name="gender" onChange={handleChange}>
        <FormControlLabel
          value="male"
          control={<Radio disabled={isSubmitting} />}
          label="Male"
          disabled={isSubmitting}
        />
        <FormControlLabel
          value="female"
          control={<Radio disabled={isSubmitting} />}
          label="Female"
          disabled={isSubmitting}
        />
        {errors.gender && touched.gender ? (
          <FormHelperText error>{errors.gender}</FormHelperText>
        ) : null}
      </Field>
      <br />
      <Field
        component={CheckboxWithLabel}
        type="checkbox"
        name="check"
        Label={{ label: "I want to send a message" }}
      />
    </>
  );
};
