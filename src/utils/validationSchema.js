import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email")
    .trim()
    .required("Email is required")
    .matches(
      /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
      "Enter Valid Email format"
    ),
  password: yup.string().required("Password is required"),
});
