import * as yup from "yup";

const issueUpdateSchema = yup.object().shape({
  actionDescription: yup
    .string()
    .trim()
    .required("Action Description Required"),
  category: yup.string().required("Category Required"),
  subIssue: yup.string(),
  status: yup.string().required("status is required"),
  resolvedAt: yup.date().default(() => new Date()),
  generationLossKwh: yup
    .number()
    .typeError("Value must be a number")
    .required("generation loss required"),
  typeOfLoss: yup.string().required("type of loss should required"),
});

export default issueUpdateSchema;
