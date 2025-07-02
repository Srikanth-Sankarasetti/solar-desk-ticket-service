import * as yup from "yup";

const schema = yup.object().shape({
  issueTitle: yup.string().required("* Issue Title Should Required"),
  plantId: yup.string().required("* Plant Name Should Select"),
  issueTitleDescription: yup
    .string()
    .required("* Issue Discription Should enter"),
});

export default schema;
