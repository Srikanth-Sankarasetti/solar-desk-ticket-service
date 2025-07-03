import * as yup from "yup";

const schema = yup.object().shape({
  plantName: yup.string().trim().required("* Plant Name Should Be Required"),
  capacityKwp: yup.number().required("* Plant Capacity Should Be Required"),
  plantType: yup.string().trim().required("* Plant Type Should Be Required"),
  plantOwner: yup.string().trim().required("* add the plant Owner"),
  Zone: yup.string().trim().required("* add the plant zone"),
});

export default schema;
