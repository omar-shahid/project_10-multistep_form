import {
  Box,
  Button,
  Card,
  CardContent,
  createStyles,
  makeStyles,
  Stepper,
  Step,
  StepLabel,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { Form, Formik, FormikProps } from "formik";
import * as React from "react";
import { BasicInfo } from "./forms/BasicInfo";
import { Note } from "./forms/Note";
import { PersonalInfo } from "./forms/PersonalInfo";
import validationSchemas from "./forms/validationSchema";

export interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  dob: Date;
  country: string;
  province: string;
  city: string;
  gender: string;
  check: boolean;
  note: string;
}

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& > *": {
        width: "45%",
        [theme.breakpoints.down("sm")]: {
          width: "100%",
        },
      },
    },
    threeCols: {
      "& > *": {
        width: "28%",
        [theme.breakpoints.down("sm")]: {
          width: "100%",
        },
      },
    },
  })
);

function App() {
  const theme = useTheme();
  const smBreak = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      width="100vw"
      minWidth={smBreak ? "100%" : "400px"}
    >
      <Card variant="elevation" elevation={5}>
        <Box minHeight="400px" maxWidth="600px" p={4}>
          <CardContent>
            <MultiStepForm />
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
}

const MultiStepForm: React.FC = (props) => {
  const theme = useTheme();
  const smBreak = useMediaQuery(theme.breakpoints.down("sm"));
  const [step, setStep] = React.useState(0);
  const LIMIT = 1;
  const isLastStep = () => step === LIMIT + 1;

  const getStepForm = (step: number, props: FormikProps<FormValues>) => {
    switch (step) {
      case 1:
        return <PersonalInfo helpers={props} />;

      case 2:
        return <Note helpers={props} />;

      default:
        return <BasicInfo helpers={props} />;
    }
  };
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        dob: new Date(),
        country: "",
        province: "",
        city: "",
        gender: "",
        check: false,
        note: "",
      }}
      validationSchema={validationSchemas[step]}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          setTimeout(() => {
            helpers.setSubmitting(false);
            alert(JSON.stringify(values, null, 2));
          }, 500);
        } else setStep((p) => p + 1);
      }}
    >
      {(helpers) => {
        const { isSubmitting } = helpers;
        return (
          <>
            {!smBreak && (
              <Stepper activeStep={step}>
                {["Basic Info", "Personal Info", "Note"].map((label, index) => {
                  return (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
            )}
            <Form autoComplete="off">
              {getStepForm(step, helpers)}
              <br />
              <br />
              <br />

              <Box
                display="flex"
                justifyContent="space-between"
                minWidth="100%"
              >
                <Button
                  variant="contained"
                  color="primary"
                  disabled={step < LIMIT}
                  onClick={() => (step >= LIMIT ? setStep((p) => p - 1) : null)}
                >
                  Prev
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  type="submit"
                >
                  {isLastStep() ? "Submit" : "Next"}
                </Button>
              </Box>
            </Form>
          </>
        );
      }}
    </Formik>
  );
};

export default App;
