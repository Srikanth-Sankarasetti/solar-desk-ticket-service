import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email("Enter valid email")
    .required("Email Field Required")
    .matches(
      /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
      "Enter Valid Email format"
    ),
});
