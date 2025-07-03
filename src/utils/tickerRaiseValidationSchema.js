import * as yup from "yup";

const schema = yup.object().shape({
  issueTitle: yup.string().trim().required("* Issue Title Should Required"),
  plantId: yup.string().required("* Plant Name Should Select"),
  issueTitleDescription: yup
    .string()
    .trim()
    .required("* Issue Discription Should enter"),
});

export default schema;
