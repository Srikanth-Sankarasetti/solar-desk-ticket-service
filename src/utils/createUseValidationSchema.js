import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().trim().required("* Name Field Required"),
  email: yup
    .string()
    .trim()
    .email("Enter a valid email")
    .required("* Email is required")
    .matches(
      /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
      "Enter Valid Email format"
    ),
  password: yup
    .string()
    .trim()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "* Must include at least one uppercase letter")
    .matches(/[a-z]/, "* Must include at least one lowercase letter")
    .matches(/\d/, "* Must include at least one number")
    .matches(
      /[@$!%*?&#^()_+\-=\[\]{};':"\\|,.<>\/]/,
      "* Must include at least one special character"
    ),
  confirmPassword: yup
    .string()
    .trim()
    .oneOf(
      [yup.ref("password"), null],
      "* Password & confirmPassowrd Should be Match"
    )
    .required(),
});
