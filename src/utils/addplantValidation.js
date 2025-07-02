import * as yup from "yup";

const schema = yup.object().shape({
  plantName: yup.string().required("* Plant Name Should Be Required"),
  capacityKwp: yup.string().required("* Plant Capacity Should Be Required"),
  plantType: yup.string().required("* Plant Type Should Be Required"),
  plantOwner: yup.string().required("* add the plant Owner"),
  zone: yup.string().required("* add the plant zone"),
});

export default schema;
