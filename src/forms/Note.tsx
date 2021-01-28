import { Typography } from "@material-ui/core";
import { Field, FormikProps } from "formik";
import { TextField } from "formik-material-ui";
import React from "react";
import { FormValues } from "../App";

interface Props {
  helpers: FormikProps<FormValues>;
}

export const Note: React.FC<Props> = () => {
  return (
    <>
      <Typography variant="h3" align="center" component="h2">
        Your message
      </Typography>
      <br />

      <Field
        component={TextField}
        label="Your Note"
        name="note"
        variant="filled"
        fullWidth
        InputProps={{ multiline: true, rows: 4 }}
      />
    </>
  );
};
