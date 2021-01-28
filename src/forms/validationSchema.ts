import * as yup from "yup";

const validationSchemas = [
  yup.object({
    firstName: yup
      .string()
      .required("Enter your first name")
      .min(3, "should be at least 3 characters"),
    lastName: yup
      .string()
      .required("Enter your last name")
      .min(3, "should be at least 3 characters"),
    email: yup
      .string()
      .required("Everyone has an email...")
      .min(3, "Enter valid email"),
    password: yup
      .string()
      .required("You don't want to get your account hacked, do you?")
      .min(8, "write atleast 8 characters"),
  }),

  yup.object({
    dob: yup.string().required(),
    country: yup.string().required("Enter your country"),
    province: yup.string().required("Enter your province"),
    city: yup.string().required("Enter your city"),
    gender: yup.string().required("Gender is required"),
    check: yup.boolean(),
  }),

  yup.object({
    note: yup.mixed().when("check", {
      is: true,
      then: yup.string().required("You have checked to enter this note"),
      otherwise: yup.string(),
    }),
  }),
];

export default validationSchemas;
