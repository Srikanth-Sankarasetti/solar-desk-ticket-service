import * as yup from "yup";

const schema = yup.object().shape({
  plantId: yup.string().required("* Plant Name Should Be Required"),
  capacityKwp: yup
    .number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .nullable(),
  plantType: yup.string(),
  plantOwner: yup.string(),
});

export default schema;
