import { Box, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { Field, FormikProps } from "formik";
import { TextField } from "formik-material-ui";
import React from "react";
import { FormValues, useStyles } from "../App";

interface Props {
  helpers: FormikProps<FormValues>;
}

export const BasicInfo: React.FC<Props> = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  const smBreak = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Typography variant="h3" align="center" component="h2">
        Basic Details
      </Typography>
      <br />
      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection={smBreak ? "column" : "row"}
        className={classes.root}
      >
        <Field
          fullWidth
          component={TextField}
          name="firstName"
          type="text"
          label="First Name"
          p={5}
        />
        <Field
          fullWidth
          component={TextField}
          name="lastName"
          type="text"
          label="last Name"
          p={5}
        />
      </Box>
      <br />
      <Field
        fullWidth
        component={TextField}
        name="email"
        type="email"
        label="Email"
        p={5}
      />
      <br />
      <br />
      <Field
        fullWidth
        component={TextField}
        type="password"
        label="Password"
        name="password"
      />
      <br />
      <br />
    </>
  );
};
